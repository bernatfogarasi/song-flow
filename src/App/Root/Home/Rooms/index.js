import styled from "styled-components";
import NewRoomButton from "./NewRoomButton";
import Room from "./Room";
import NewRoomModal from "components/NewRoomModal";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "context";

const Wrapper = styled.div`
  /* border: 1px solid #333; */
  border-radius: 4px;
  width: 332px;
`;

const RoomsHeader = styled.div`
  margin: 0px 15px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 10px;
  gap: 10px;
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: blue orange;
  transition: 0.2s;
  ::-webkit-scrollbar {
    width: 10px;
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

  useEffect(() => {}, []);

  return (
    <Wrapper className={className}>
      <RoomsHeader>
        Rooms
        <NewRoomButton onClick={onNewRoomButtonClick} />
      </RoomsHeader>
      <RoomList>
        {session?.rooms &&
          session.rooms.map(({ name, url }) => (
            <Room key={name} name={name} url={url} />
          ))}
      </RoomList>
      {showNewRoomModal && <NewRoomModal onClose={onNewRoomModalClose} />}
    </Wrapper>
  );
};

export default Rooms;
