import { RoomContext } from "context";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Request from "./Request";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const Title = styled.div``;

const Placeholder = styled.div`
  opacity: 0.5;
`;

const Requests = ({ className }) => {
  const { requests } = useContext(RoomContext);

  return (
    <Wrapper className={className}>
      <Title>Requests</Title>
      {requests?.length ? (
        requests.map((request, index) => (
          <Request request={request} index={index} />
        ))
      ) : (
        <Placeholder>None</Placeholder>
      )}
    </Wrapper>
  );
};

export default Requests;
