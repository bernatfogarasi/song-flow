import styled from "styled-components";
import { useEffect, useState } from "react";
import useSession from "hooks/useSession";
// import video from "assets/ignore/dancing1.mp4";
import Login from "./Login";
import Home from "./Home";
import LoadingScreen from "components/LoadingScreen";

// const Video = styled.video`
//   position: absolute;
//   width: 100px;
// `;

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const { data, rerun: getData } = useSession();

  useEffect(() => {
    console.log(data);
    if (data) setIsLoggedIn(true);
  }, [data]);

  const onLogin = (data) => {
    setIsLoggedIn(true);
    getData();
  };
  {
    /* <Video autoplay muted loop>
    <source src={video} type="video/mp4" />
  </Video> */
  }

  return isLoggedIn ? (
    <Home data={data} />
  ) : isLoggedIn === false ? (
    <Login />
  ) : (
    <LoadingScreen />
  );
};

export default Root;
