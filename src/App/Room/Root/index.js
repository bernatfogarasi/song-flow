import LoadingScreen from "components/LoadingScreen";
import { SessionContext } from "context";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Home from "./Home";
import LoginOrSignUp from "./LoginOrSignUp";

const Wrapper = styled.div``;

const Room = () => {
  const { session, refreshSession, error } = useContext(SessionContext);

  useEffect(() => {}, [session]);

  return session ? <Home /> : error ? <LoginOrSignUp /> : <LoadingScreen />;
};

export default Room;
