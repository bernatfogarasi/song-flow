import styled from "styled-components";
import TopBar from "components/TopBar";
import Room from "./Room";

const Wrapper = styled.div``;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ProfilePicture = styled.div`
  margin: 10px;
  width: 100px;
  aspect-ratio: 1;
  border: 1px solid #333;
  border-radius: 50%;
`;

const Username = styled.div`
  margin: 10px;
  font-size: 40px;
`;

const RoomsAll = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  margin-top: 50px;
`;

const Rooms = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  margin: 10px;
`;

const RoomsOwner = styled(Rooms)``;

const RoomsMember = styled(Rooms)``;

const RoomsHeader = styled.div`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddRoomButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const AddRoomButtonLine = styled.div`
  background: white;
  width: 2px;
  height: 20px;
  position: absolute;
  left: 9px;
`;

const AddRoomButtonLineVertical = styled(AddRoomButtonLine)``;

const AddRoomButtonLineHorizontal = styled(AddRoomButtonLine)`
  transform: rotate(90deg);
`;

const rooms = [
  { name: "Birthday party", rank: "admin" },
  { name: "Family", rank: "admin" },
  { name: "Music Restaurant", rank: "member" },
];

const Home = () => {
  return (
    <Wrapper>
      <TopBar logo />
      <PersonalInfo>
        <ProfilePicture />
        {/* <Username>{sessionData && sessionData.username}</Username> */}
      </PersonalInfo>
      <RoomsAll>
        <Rooms>
          <RoomsHeader>
            Owner
            <AddRoomButton>
              <AddRoomButtonLineVertical />
              <AddRoomButtonLineHorizontal />
            </AddRoomButton>
          </RoomsHeader>
          {rooms.map(({ name, rank }) => (
            <Room key={name} name={name} rank={rank} />
          ))}
        </Rooms>
      </RoomsAll>
    </Wrapper>
  );
};

export default Home;
