import styled from "styled-components";
import TopBar from "components/TopBar";
import PersonalInfo from "./PersonalInfo";
import { useContext } from "react";
import RoomsRaw from "./Rooms";
import { SessionContext } from "context";
import Page from "components/Page";

const Wrapper = styled(Page)`
  gap: 50px;
  padding-top: 100px;
`;

const Rooms = styled(RoomsRaw)`
  margin: auto;
`;

const Home = () => {
  const { session } = useContext(SessionContext);
  return (
    <Wrapper logo menu search logout>
      <PersonalInfo username={session?.username} />
      <Rooms />
    </Wrapper>
  );
};

export default Home;
