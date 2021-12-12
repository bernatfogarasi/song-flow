import { useContext, useEffect, useState } from "react";
// import video from "assets/ignore/dancing1.mp4";
import Login from "./Login";
import Home from "./Home";
import LoadingScreen from "components/LoadingScreen";
import { SessionContext } from "context";

// const Video = styled.video`
//   position: absolute;
//   width: 100px;
// `;

const Root = () => {
  const { session, refreshSession, error } = useContext(SessionContext);

  const onLogin = () => {
    refreshSession();
  };

  /* <Video autoplay muted loop>
    <source src={video} type="video/mp4" />
  </Video> */

  return session ? (
    <Home />
  ) : error ? (
    <Login onLogin={onLogin} />
  ) : (
    <LoadingScreen />
  );
};

export default Root;
