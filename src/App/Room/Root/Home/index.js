import styled from "styled-components";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { serverHostSocket } from "functions/requests";
import DesktopLayout from "./DesktopLayout";
import { RoomContext } from "context";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Home = ({ shortId }) => {
  const [socket, setSocket] = useState();
  const [next, setNext] = useState();

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

    return () => {
      socket.close();
    };
  }, [socket]);

  const onNext = (data) => {
    socket.emit("request-next", data);
  };

  return (
    <Wrapper>
      <RoomContext.Provider value={{ next, onNext }}>
        <DesktopLayout onNext={onNext} />
      </RoomContext.Provider>
    </Wrapper>
  );
};

export default Home;
