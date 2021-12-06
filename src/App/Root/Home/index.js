import styled from "styled-components";
import TopBar from "components/TopBar";
import PersonalInfo from "./PersonalInfo";
import useServerRequest from "hooks/useServerRequest";
import { useContext, useEffect } from "react";
import RoomsRaw from "./Rooms";
import useSession from "hooks/useSession";
import { SessionContext } from "context";

const Wrapper = styled.div``;

const Rooms = styled(RoomsRaw)`
  margin: auto;
  margin-top: 50px;
`;

const rooms = [
  { name: "Birthday party", rank: "admin" },
  { name: "Family", rank: "admin" },
  { name: "Music Restaurant", rank: "member" },
];

const Home = () => {
  const session = useContext(SessionContext);
  return (
    <Wrapper>
      <TopBar logo />
      <PersonalInfo username={session?.username} />
      <Rooms rooms={rooms} />
    </Wrapper>
  );
};

export default Home;
