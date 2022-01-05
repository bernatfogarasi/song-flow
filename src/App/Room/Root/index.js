import LoadingScreen from "components/LoadingScreen";
import { SessionContext } from "context";
import { serverRequest } from "functions/requests";
import { useContext, useEffect, useState } from "react";
import Home from "./Home";
import LoginOrSignUp from "./LoginOrSignUp";
import NotFound from "./NotFound";
import Request from "./Request";
import Waiting from "./Waiting";

const Room = () => {
  const { session, error } = useContext(SessionContext);
  const [roomExists, setRoomExists] = useState();
  const [permission, setPermission] = useState();
  const [waiting, setWaiting] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    const shortId = window.location.pathname.split("/").pop();
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
    <Home />
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
