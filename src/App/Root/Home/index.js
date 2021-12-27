import styled from "styled-components";
import TopBar from "components/TopBar";
import PersonalInfo from "./PersonalInfo";
import { useContext } from "react";
import RoomsRaw from "./Rooms";
import { SessionContext } from "context";

const Wrapper = styled.div``;

const Rooms = styled(RoomsRaw)`
  margin: auto;
  margin-top: 50px;
`;

const Home = () => {
  const { session } = useContext(SessionContext);
  return (
    <Wrapper>
      <TopBar logo menu search logout />
      <PersonalInfo username={session?.username} />
      <Rooms />
    </Wrapper>
  );
};

export default Home;
