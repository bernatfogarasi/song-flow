import { useEffect, useState } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { RoomContext } from "context";
import { serverHostSocket } from "functions/requests";
import Layout from "./Layout";

const Wrapper = styled.div``;

const Home = () => {
  const [current, setCurrent] = useState();
  const [queue, setQueue] = useState();
  const [socket, setSocket] = useState();
  const [dragElement, setDragElement] = useState();
  const [resultsSpotify, setResultsSpotify] = useState([]);
  const [resultsYoutube, setResultsYoutube] = useState([]);
  const [playing, setPlaying] = useState();
  const [progress, setProgress] = useState();
  const [progressBar, setProgressBar] = useState();
  const [requests, setRequests] = useState();
  const [members, setMembers] = useState();
  const [name, setName] = useState();
  const [selected, setSelected] = useState();
  const [message, setMessage] = useState();
  const [sound, setSound] = useState();

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

    const socketsIn = Object.entries({
      current: setCurrent,
      members: setMembers,
      message: setMessage,
      name: setName,
      playing: setPlaying,
      progress: setProgress,
      queue: setQueue,
      requests: setRequests,
    }).map(
      ([name, func]) =>
        socket &&
        socket.on(name, (...params) => {
          console.log(Date.now(), name, ...params);
          return func(...params);
        })
    );

    return () => {
      socket.close();
    };
  }, [socket]);

  const socketsOut = Object.entries({
    onCurrent: "request-current",
    onFill: "request-fill",
    onInsert: "request-insert",
    onMemberRemove: "request-member-remove",
    onMove: "request-move",
    onNext: "request-next",
    onPlaying: "request-playing",
    onProgress: "request-progress",
    onRemove: "request-remove",
    onRequestAccept: "request-request-accept",
    onRequestRemove: "request-request-remove",
  }).reduce(
    (previous, [funcName, name]) => ({
      ...previous,
      [funcName]: (...params) => {
        socket.emit(name, ...params);
        console.log(Date.now(), name, ...params);
      },
    }),
    {}
  );

  return (
    <Wrapper>
      <RoomContext.Provider
        value={{
          current,
          members,
          name,
          playing,
          progress,
          queue,
          requests,
          ...socketsOut,
          dragElement,
          resultsYoutube,
          resultsSpotify,
          progressBar,
          selected,
          sound,
          setDragElement,
          setProgressBar,
          setResultsYoutube,
          setResultsSpotify,
          setSelected,
          setSound,
        }}
      >
        <Layout />
      </RoomContext.Provider>
    </Wrapper>
  );
};

export default Home;
