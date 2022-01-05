import styled from "styled-components";
import Page from "components/Page";

const Wrapper = styled(Page)``;

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
    <Wrapper logo search menu logout>
      <Message>
        <Title>Room not found</Title>
        {window.location.pathname}
        <Details>This room does not exist. Please check the url.</Details>
      </Message>
    </Wrapper>
  );
};

export default NotFound;
