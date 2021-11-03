import styled from "styled-components";
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

const CreateRoomLink = styled.a`
  margin-top: 4%;
  color: white;
  :hover {
    color: lightgrey;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <JoinRoomButton>Join a room</JoinRoomButton>
      {/* <CreateRoomButton style={{ color: "red" }}>
        Create a room
      </CreateRoomButton> */}
      <CreateRoomLink href="">Create a room</CreateRoomLink>
    </Wrapper>
  );
};

export default Navigation;
