import { useEffect, useState } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { RoomContext } from "context";
import { serverHostSocket } from "functions/requests";
import Layout from "./Layout";

const Wrapper = styled.div``;

const Home = () => {
  const [socket, setSocket] = useState();
  const [drag, setDrag] = useState();
  const [dragElement, setDragElement] = useState();
  const [queue, setQueue] = useState();
  const [current, setCurrent] = useState();
  const [resultsSpotify, setResultsSpotify] = useState([]);
  const [resultsYoutube, setResultsYoutube] = useState([]);
  const [playing, setPlaying] = useState();
  const [progress, setProgress] = useState();
  const [progressBar, setProgressBar] = useState();
  const [requests, setRequests] = useState();
  const [members, setMembers] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    const shortId = window.location.pathname.split("/").pop();
    setSocket(
      io(`${serverHostSocket}?shortId=${shortId}`, {
        transports: ["websocket"],
      })
    );
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", console.log);
    socket.on("queue", setQueue);
    socket.on("current", setCurrent);
    socket.on("playing", setPlaying);
    socket.on("progress", setProgress);
    socket.on("requests", setRequests);
    socket.on("members", setMembers);
    socket.on("name", setName);

    socket.on("queue", (...params) =>
      console.log(Date.now(), "queue", ...params)
    );
    socket.on("current", (...params) =>
      console.log(Date.now(), "current", ...params)
    );
    socket.on("playing", (...params) =>
      console.log(Date.now(), "playing", ...params)
    );
    socket.on("progress", (...params) =>
      console.log(Date.now(), "progress", ...params)
    );
    socket.on("requests", (...params) =>
      console.log(Date.now(), "requests", ...params)
    );
    socket.on("members", (...params) =>
      console.log(Date.now(), "members", ...params)
    );
    socket.on("name", (...params) =>
      console.log(Date.now(), "name", ...params)
    );

    return () => {
      socket.close();
    };
  }, [socket]);

  const onPlaying = (playing) => {
    socket.emit("request-playing", playing);
    console.log(Date.now(), "request-playing", playing);
  };
  const onProgress = (progress) => {
    socket.emit("request-progress", progress);
    console.log(Date.now(), "request-progress", progress);
  };
  const onCurrent = (content) => {
    socket.emit("request-current", content);
    console.log(Date.now(), "request-current", content);
  };
  const onRemove = (index) => {
    socket.emit("request-remove", index);
    console.log(Date.now(), "request-remove", index);
  };
  const onNext = () => {
    socket.emit("request-next");
    console.log(Date.now(), "request-next");
  };
  const onFill = () => {
    socket.emit("request-fill");
    console.log(Date.now(), "request-fill");
  };
  const onInsert = (content, index) => {
    socket.emit("request-insert", content, index);
    console.log(Date.now(), "request-insert", content, index);
  };
  const onMove = (indexFrom, indexTo) => {
    socket.emit("request-move", indexFrom, indexTo);
    console.log(Date.now(), "request-move", indexFrom, indexTo);
  };
  // const onMemberInsert = (id, index) => socket.emit("request-member-insert");
  const onMemberRemove = (index) => {
    socket.emit("request-member-remove");
    console.log(Date.now(), "request-member-remove");
  };
  const onRequestAccept = (index) => {
    socket.emit("request-request-accept");
    console.log(Date.now(), "request-request-accept");
  };
  const onRequestRemove = (index) => {
    socket.emit("request-request-remove");
    console.log(Date.now(), "request-request-remove");
  };

  return (
    <Wrapper>
      <RoomContext.Provider
        value={{
          queue,
          current,
          playing,
          progress,
          requests,
          members,
          name,
          onPlaying,
          onProgress,
          onCurrent,
          onRemove,
          onNext,
          onFill,
          onInsert,
          onMove,
          // onMemberInsert,
          onMemberRemove,
          onRequestAccept,
          onRequestRemove,
          drag,
          dragElement,
          resultsYoutube,
          resultsSpotify,
          progressBar,
          setDrag,
          setDragElement,
          setResultsYoutube,
          setResultsSpotify,
          setProgressBar,
        }}
      >
        <Layout />
      </RoomContext.Provider>
    </Wrapper>
  );
};

export default Home;
