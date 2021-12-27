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
  const [progress, setProgress] = useState();
  const [progressBar, setProgressBar] = useState();
  const [requests, setRequests] = useState();

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

    socket.on("queue", (data) => setQueue(data));

    socket.on("current", (data) => setCurrent(data));

    socket.on("playing", (state) => setPlaying(state));

    socket.on("progress", (fraction) => setProgress(fraction));

    socket.on("requests", (requests) => {
      console.log(requests);
      setRequests(requests);
    });

    return () => {
      socket.close();
    };
  }, [socket]);

  const onQueue = (data, from, to) => {
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

  const onProgress = (fraction) => {
    socket.emit("request-progress", fraction);
  };

  const onAccept = (index) => {
    socket.emit("request-accept", index);
  };

  const onReject = (index) => {
    socket.emit("request-reject", index);
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
          progress,
          onProgress,
          requests,
          onAccept,
          onReject,
          drag,
          setDrag,
          dragElement,
          setDragElement,
          results,
          setResults,
          progressBar,
          setProgressBar,
        }}
      >
        <Layout />
      </RoomContext.Provider>
    </Wrapper>
  );
};

export default Home;
