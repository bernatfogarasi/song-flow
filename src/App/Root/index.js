import { useContext, useEffect } from "react";
// import video from "assets/ignore/dancing1.mp4";
import Login from "./Login";
import Home from "./Home";
import LoadingScreen from "components/LoadingScreen";
import { SessionContext } from "context";
import { serverRequest } from "functions/requests";

// const Video = styled.video`
//   position: absolute;
//   width: 100px;
// `;

const Root = () => {
  const { session, refreshSession, error } = useContext(SessionContext);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const spotifyCode = urlSearchParams.get("code");
    if (!spotifyCode) return;
    const authSpotify = async () => {
      const json = await serverRequest("/user/auth/spotify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: spotifyCode,
        }),
        credentials: "include",
      });
      console.log("json", json);
      window.location.href = "/";
    };
    authSpotify();
  }, []);

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
