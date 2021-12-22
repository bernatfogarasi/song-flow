import { RoomContext } from "context";
import { useContext, useState } from "react";
import styled from "styled-components";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import SpinnerLiveRaw from "components/SpinnerLive";
import MenuRaw from "components/Menu";
import useClickAway from "hooks/useClickAway";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  background: #222;
  display: grid;
  grid-template-columns: auto auto 1fr 20px auto;
  grid-template-rows: 50% 50%;
  column-gap: 15px;
  &.over {
    ::before {
      content: "";
      position: absolute;
      top: -50px;
      background: #222;
      height: 50px;
      width: 100%;
    }
    border-top: 50px solid transparent;
  }
  border-top-color: transparent;
  position: relative;
  font-family: Montserrat;
  cursor: pointer;
  border-radius: 4px;
  width: calc(100% - 40px);
  font-size: 14px;
  padding: 8px 15px;
  align-items: center;
  user-select: none;
  height: 40px;
`;

const Index = styled.div`
  grid-row: span 2;
  text-align: center;
  opacity: 0.6;
`;

const Thumbnail = styled.img`
  grid-row: span 2;
  height: 100%;

  pointer-events: none;
`;

const Title = styled.div`
  font-family: MontserratMedium;
  grid-column: 3;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled.div`
  grid-column: 3;
  grid-row: 2;
  font-size: 13px;
  opacity: 0.6;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SpinnerLive = styled(SpinnerLiveRaw)`
  grid-row: span 2;
`;

const SiteIcon = styled.img`
  grid-row: span 2;
  justify-self: center;
  width: 20px;
  align-self: top;
  pointer-events: none;
`;

const Menu = styled(MenuRaw)`
  grid-column: span 3;
  grid-row: span 2;
`;

const Hint = styled.div`
  grid-row: span 2;
  grid-column: span 5;
`;

const Current = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { onRemove, current, playing, onPlaying } = useContext(RoomContext);

  const onClickAway = () => {
    setOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  const onClick = () => {
    onPlaying(!playing);
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <Wrapper
      className={className}
      ref={ref}
      onContextMenu={onContextMenu}
      onClick={onClick}
    >
      {current ? (
        <>
          <Index>1</Index>
          <Thumbnail src={current.thumbnailUrl} alt="" />
          {!open && (
            <>
              <Title title={current.title}>{current.title}</Title>
              <Author>{current.author}</Author>
              <SpinnerLive />
              <SiteIcon src={icons[current.site]} alt="" />
            </>
          )}
          {open && <Menu onBinClick={() => onRemove(-1)} />}
        </>
      ) : (
        <Hint>The queue is empty.</Hint>
      )}
    </Wrapper>
  );
};

export default Current;
