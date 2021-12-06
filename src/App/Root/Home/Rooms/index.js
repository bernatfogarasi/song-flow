import styled from "styled-components";
import NewRoomButton from "./NewRoomButton";
import Room from "./Room";
import NewRoomModal from "components/NewRoomModal";
import { useState } from "react";

const Wrapper = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  width: fit-content;
`;

const RoomsHeader = styled.div`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rooms = ({ className, rooms }) => {
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);

  const onNewRoomButtonClick = () => {
    setShowNewRoomModal(true);
    console.log("CLICK");
  };

  const onNewRoomModalClose = () => {
    setShowNewRoomModal(false);
  };

  return (
    <Wrapper className={className}>
      <RoomsHeader>
        Rooms
        <NewRoomButton onClick={onNewRoomButtonClick} />
      </RoomsHeader>
      {rooms.map(({ name, rank }) => (
        <Room key={name} name={name} rank={rank} />
      ))}
      {showNewRoomModal && <NewRoomModal onClose={onNewRoomModalClose} />}
    </Wrapper>
  );
};

export default Rooms;
