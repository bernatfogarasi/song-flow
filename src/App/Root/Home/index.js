import styled from "styled-components";
import PersonalInfoRaw from "./PersonalInfo";
import { useContext, useEffect } from "react";
import RoomsRaw from "./Rooms";
import { SessionContext } from "context";
import Page from "components/Page";

const Wrapper = styled(Page)`
  gap: 50px;
  @media (max-width: 800px) {
    padding-top: 20px;
  }
  @media (min-width: 800px) {
    padding-top: 100px;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
`;

const Rooms = styled(RoomsRaw)``;

const PersonalInfo = styled(PersonalInfoRaw)``;

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
