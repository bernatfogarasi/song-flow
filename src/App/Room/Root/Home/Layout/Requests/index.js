import { RoomContext } from "context";
import { useContext } from "react";
import styled from "styled-components";
import Request from "./Request";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const Requests = ({ className }) => {
  const { requests } = useContext(RoomContext);

  return (
    <Wrapper className={className}>
      Requests
      {requests &&
        requests.map((request, index) => (
          <Request request={request} index={index} />
        ))}
    </Wrapper>
  );
};

export default Requests;
