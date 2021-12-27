import Page from "components/Page";
import styled from "styled-components";

const Wrapper = styled(Page)`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Message = styled.div`
  font-size: 20px;
`;

const Comment = styled.div`
  opacity: 0.6;
`;

const Waiting = ({ className }) => {
  return (
    <Wrapper className={className} logo search menu logout>
      <Message>You have requested access.</Message>
      <Comment>Please wait for a member to accept your request.</Comment>
    </Wrapper>
  );
};

export default Waiting;
