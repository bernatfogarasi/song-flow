import styled from "styled-components";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { serverHostSocket } from "functions/requests";
import Layout from "./Layout";
import { RoomContext } from "context";

const Wrapper = styled.div``;

const Home = ({ shortId }) => {
  const [socket, setSocket] = useState();
  const [next, setNext] = useState();
  const [drag, setDrag] = useState();
  const [dragElement, setDragElement] = useState();
  const [queue, setQueue] = useState();
  const [current, setCurrent] = useState();
  const [results, setResults] = useState();

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

    socket.on("next", (data) => setNext(data));

    socket.on("queue", (data) => {
      setQueue(data);
    });

    socket.on("current", (data) => setCurrent(data));

    return () => {
      socket.close();
    };
  }, [socket]);

  const onNext = (data) => {
    socket.emit("request-next", data);
  };

  const onQueue = (data, from, to) => {
    console.log("queue");
    socket.emit("request-queue", data, from, to);
  };

  const onCurrent = (data) => {
    socket.emit("request-current", data);
  };

  return (
    <Wrapper>
      <RoomContext.Provider
        value={{
          next,
          onNext,
          queue,
          onQueue,
          current,
          onCurrent,
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
