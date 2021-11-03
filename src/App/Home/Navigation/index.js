import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const Wrapper = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinRoomButton = styled(Button)`
  background: #fecf37;
`;

const CreateRoomButton = styled(Button)`
  background: white;
`;

const CreateRoomLink = styled(Link)`
  margin-top: 4%;
  color: white;
  :hover {
    color: lightgrey;
  }
`;

const JoinRoomLink = styled(Link)`
  margin: 10px;
  padding: 10px 14px;
  border-radius: 20px;
  background: #fecf37;
  color: black;
  text-decoration: none;
  :hover {
    transform: scale(1.1);
  }
  :active {
    :after {
      content: "";
      position: absolute;
      border-radius: 24px;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: white 2px solid;
    }
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <JoinRoomLink to="/join">Join a room</JoinRoomLink>
      {/* <CreateRoomButton style={{ color: "red" }}>
        Create a room
      </CreateRoomButton> */}
      <CreateRoomLink to="/create">Create a room</CreateRoomLink>
    </Wrapper>
  );
};

export default Navigation;
