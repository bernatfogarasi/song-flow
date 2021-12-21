import styled from "styled-components";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { serverHostSocket } from "functions/requests";
import Layout from "./Layout";
import { RoomContext } from "context";

const Wrapper = styled.div``;

const Home = ({ shortId }) => {
  const [socket, setSocket] = useState();
  const [drag, setDrag] = useState();
  const [dragElement, setDragElement] = useState();
  const [queue, setQueue] = useState();
  const [current, setCurrent] = useState();
  const [results, setResults] = useState();
  const [playing, setPlaying] = useState();

  useEffect(() => {
    setSocket(
      io(`${serverHostSocket}?shortId=${shortId}`, {
        transports: ["websocket"],
      })
    );
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (message) => console.log(message));

    socket.on("queue", (data) => {
      setQueue(data);
      console.log(data);
    });

    socket.on("current", (data) => {
      setCurrent(data);
      console.log(data);
    });

    socket.on("playing", (state) => {
      setPlaying(state);
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  const onQueue = (data, from, to) => {
    console.log("queue");
    socket.emit("request-queue", data, from, to);
  };

  const onCurrent = (data, from) => {
    socket.emit("request-current", data, from);
  };

  const onPlaying = (state) => {
    socket.emit("request-playing", state);
  };

  const onRemove = (index) => {
    socket.emit("request-remove", index);
  };

  return (
    <Wrapper>
      <RoomContext.Provider
        value={{
          queue,
          onQueue,
          current,
          onCurrent,
          playing,
          onPlaying,
          onRemove,
          drag,
          setDrag,
          dragElement,
          setDragElement,
          results,
          setResults,
        }}
      >
        <Layout />
      </RoomContext.Provider>
    </Wrapper>
  );
};

export default Home;
