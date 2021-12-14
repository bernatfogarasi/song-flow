import LargeButton from "components/LargeButton";
import TopBar from "components/TopBar";
import styled from "styled-components";
import queryString from "querystring";

const Wrapper = styled.div``;

const Message = styled.div`
  margin: auto;
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 40px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 26px;
`;

const Details = styled.div`
  color: #777;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <TopBar logo search menu />
      <Message>
        <Title>Room not found</Title>
        <Details>This room does not exist. Please check the url.</Details>
      </Message>
    </Wrapper>
  );
};

export default NotFound;
