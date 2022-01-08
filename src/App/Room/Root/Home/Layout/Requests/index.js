import useRoom from "hooks/useRoom";
import styled from "styled-components";
import Request from "./Request";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.div``;

const Placeholder = styled.div`
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Requests = ({ className }) => {
  const { requests } = useRoom();

  return (
    <Wrapper className={className}>
      <Title>Requests</Title>
      {requests?.length ? (
        <Content>
          {requests.map((request, index) => (
            <Request request={request} index={index} />
          ))}
        </Content>
      ) : (
        <Placeholder>None</Placeholder>
      )}
    </Wrapper>
  );
};

export default Requests;
