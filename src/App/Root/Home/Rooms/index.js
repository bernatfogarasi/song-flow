import styled from "styled-components";
import NewRoomButton from "./NewRoomButton";
import Room from "./Room";
import NewRoomModal from "components/NewRoomModal";
import { useContext, useState } from "react";
import { SessionContext } from "context";

const Wrapper = styled.div`
  border-radius: 4px;
`;

const RoomsHeader = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RoomList = styled.div`
  cursor: grab;
  overflow: auto;
  display: flex;
  padding: 15px;
  gap: 10px;
  margin: auto;
  width: 90vw;
  scrollbar-width: thin;
  scrollbar-color: blue orange;
  transition: 0.2s;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: inherit;
    border-radius: 4px;
    /* border-radius: 10px; */
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background: #333;
      /* border-radius: 10px; */
    }
  }
  ::-webkit-scrollbar-thumb:hover {
    transition: 0.2s;
    background: #444;
  }
`;

const Rooms = ({ className }) => {
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);
  const { session } = useContext(SessionContext);

  const onNewRoomButtonClick = () => {
    setShowNewRoomModal(true);
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
      <RoomList>
        {session?.rooms &&
          session.rooms.map((room) => <Room key={room.url} room={room} />)}
      </RoomList>
      {showNewRoomModal && <NewRoomModal onClose={onNewRoomModalClose} />}
    </Wrapper>
  );
};

export default Rooms;
