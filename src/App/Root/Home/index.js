import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import { useContext, useEffect } from "react";
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
  const { session, refreshSession } = useContext(SessionContext);
  useEffect(() => {
    refreshSession();
    //eslint-disable-next-line
  }, []);
  return (
    <Wrapper logo menu search logout>
      <PersonalInfo username={session?.username} />
      <Rooms />
    </Wrapper>
  );
};

export default Home;
