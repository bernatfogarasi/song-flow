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
  const [isLoggedIn, setIsLoggedIn] = useState();
  const { session, refreshSession } = useContext(SessionContext);

  const onLogin = () => {
    setIsLoggedIn(true);
    refreshSession();
  };

  useEffect(() => {
    if (session) setIsLoggedIn(true);
  }, [session]);

  /* <Video autoplay muted loop>
    <source src={video} type="video/mp4" />
  </Video> */

  return isLoggedIn ? (
    <Home />
  ) : isLoggedIn === false ? (
    <Login onLogin={onLogin} />
  ) : (
    <LoadingScreen />
  );
};

export default Root;
