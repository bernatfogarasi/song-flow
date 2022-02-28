import Page from "components/Page";
import { SessionContext } from "context";
import { useContext, useEffect } from "react";
import styled from "styled-components";

import PersonalInfoRaw from "./PersonalInfo";
import RoomsRaw from "./Rooms";

const Wrapper = styled(Page)`
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
  align-items: center;
  gap: 10px;
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
    <Wrapper logo menu search logout spotify>
      <PersonalInfo username={session?.username} />
      <Rooms />
    </Wrapper>
  );
};

export default Home;
