import LoadingScreen from "components/LoadingScreen";
import { SessionContext } from "context";
import { serverRequest } from "functions/requests";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./Home";
import LoginOrSignUp from "./LoginOrSignUp";
import NotFound from "./NotFound";
import Request from "./Request";
import Waiting from "./Waiting";

const Wrapper = styled.div``;

const Room = () => {
  const { session, error } = useContext(SessionContext);
  const [roomExists, setRoomExists] = useState();
  const shortId = window.location.pathname.split("/").pop();
  const [permission, setPermission] = useState();
  const [waiting, setWaiting] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const json = await serverRequest(`/room/get?shortId=${shortId}`);
      setPermission(json.message !== "not member");
      setRoomExists(json.message === "success");
      setWaiting(json.message === "not member waiting");
      setInfo(json?.info);
    };
    fetchData();
  }, []);

  return error ? (
    <LoginOrSignUp />
  ) : roomExists === undefined ? (
    <LoadingScreen />
  ) : waiting ? (
    <Waiting info={info} />
  ) : !permission ? (
    <Request info={info}></Request>
  ) : !roomExists ? (
    <NotFound />
  ) : session ? (
    <Home shortId={shortId} />
  ) : (
    <LoadingScreen />
  );
  // return roomExists === undefined ? (
  //   <LoadingScreen />
  // ) : roomExists === false ? (
  //   <NotFound />
  // ) : session ? (
  //   <Home shortId={shortId} />
  // ) : (
  //   <LoginOrSignUp />
  // );
};

export default Room;
