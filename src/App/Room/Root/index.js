import LoadingScreen from "components/LoadingScreen";
import { SessionContext } from "context";
import { serverRequest } from "functions/requests";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./Home";
import LoginOrSignUp from "./LoginOrSignUp";
import NotFound from "./NotFound";

const Wrapper = styled.div``;

const Room = () => {
  const { session, refreshSession, error } = useContext(SessionContext);
  const [roomExists, setRoomExists] = useState();
  const shortId = window.location.pathname.split("/").pop();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const json = await serverRequest(`/room/get?shortId=${shortId}`);
      if (!mounted) return;
      setRoomExists(json.message === "success");
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  if (roomExists === undefined) return <LoadingScreen />;
  if (!roomExists) return <NotFound />;
  if (session) return <Home shortId={shortId} />;
  if (error) return <LoginOrSignUp />;
  return <LoadingScreen />;
};

export default Room;
