import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Player from "./Player";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { serverHostSocket } from "functions/requests";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const shortId = window.location.pathname.split("/").pop();

const socket = io(`${serverHostSocket}?shortId=${shortId}`, {
  transports: ["websocket"],
});

const Home = () => {
  useEffect(() => {
    socket.on("message", (message) => console.log(message));

    socket.emit("connection");

    socket.on("members", (members) => console.log);
  }, []);

  const onRequest = () => {
    socket.emit("request", shortId);
  };
  return (
    <Wrapper>
      <motion.div exit={{ opacity: 1 }}>
        <LeftSide />
        <Player />
        <RightSide />
      </motion.div>
    </Wrapper>
  );
};

export default Home;
