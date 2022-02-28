import imageMove from "assets/icons/arrow.png";
import NewRoomModal from "components/NewRoomModal";
import { SessionContext } from "context";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import NewRoomButton from "./NewRoomButton";
import Room from "./Room";

const Wrapper = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RoomsHeader = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  position: relative;
  display: flex;
`;

const List = styled.div`
  user-select: none;
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

const ButtonMove = styled.img`
  width: 50px;
  aspect-ratio: 1;
  box-sizing: border-box;
  max-width: 10vw;
  z-index: 2;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  top: 50%;
  opacity: 0.8;
  transition: 0.2s;
  border: 1px solid black;
  background: white;
  padding: 10px;
  border-radius: 50%;
`;

const ButtonMoveRight = styled(ButtonMove)`
  right: 10px;
  transform: translateY(-50%);
  :hover {
    transform: translateY(-50%) scale(1.3);
  }
`;

const ButtonMoveLeft = styled(ButtonMove)`
  left: 10px;
  transform: translateY(-50%) rotate(180deg);
  :hover {
    transform: translateY(-50%) rotate(180deg) scale(1.3);
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

  const ref = useRef();

  const scroll = (
    element,
    direction,
    speed = 10,
    distance = 200,
    step = 10
  ) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  const onClickLeft = () => {
    scroll(ref.current, "left");
  };

  const onClickRight = () => {
    scroll(ref.current, "right");
  };

  return (
    <Wrapper className={className}>
      <NewRoomButton onClick={onNewRoomButtonClick} />
      {session?.rooms?.length ? (
        <>
          <RoomsHeader>Rooms</RoomsHeader>
          <ListContainer>
            <ButtonMoveLeft src={imageMove} onClick={onClickLeft} />
            <List draggable={false} ref={ref}>
              {session?.rooms &&
                session.rooms.map((room) => (
                  <Room key={room.url} room={room} />
                ))}
            </List>
            <ButtonMoveRight src={imageMove} onClick={onClickRight} />
          </ListContainer>
        </>
      ) : null}
      {showNewRoomModal && <NewRoomModal onClose={onNewRoomModalClose} />}
    </Wrapper>
  );
};

export default Rooms;
