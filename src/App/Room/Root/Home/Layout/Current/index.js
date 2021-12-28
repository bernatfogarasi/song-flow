import { RoomContext } from "context";
import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import SpinnerLiveRaw from "components/SpinnerLive";
import MenuRaw from "components/Menu";
import useClickAway from "hooks/useClickAway";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  background: #222;
  display: flex;
  gap: 15px;
  position: relative;
  font-family: Montserrat;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
  padding: 8px 15px;
  align-items: center;
  user-select: none;
  height: 40px;
  ${({ empty }) =>
    empty &&
    css`
      background: #1a1a1a;
    `}
`;

const Index = styled.div`
  text-align: center;
  opacity: 0.6;
`;

const Thumbnail = styled.img`
  border: 1px solid;
  height: 100%;

  pointer-events: none;
`;

const TitleAuthor = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: MontserratMedium;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled.div`
  font-size: 13px;
  opacity: 0.6;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SpinnerLive = styled(SpinnerLiveRaw)``;

const SiteIcon = styled.img`
  justify-self: center;
  width: 20px;
  align-self: top;
  pointer-events: none;
`;

const Menu = styled(MenuRaw)``;

const Hint = styled.div``;

const Current = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { onRemove, current, playing, onPlaying } = useContext(RoomContext);

  const onClickAway = () => {
    setOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  const onClick = () => {
    if (!current) return;
    onPlaying(!playing);
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const onBinClick = () => {
    onRemove(-1);
    setOpen(false);
  };

  return (
    <Wrapper
      className={className}
      ref={ref}
      onContextMenu={onContextMenu}
      onClick={onClick}
      empty={!current?.id}
    >
      {current?.id ? (
        <>
          <Index>1</Index>
          <Thumbnail src={current.thumbnailUrl} alt="" />
          {!open && (
            <>
              <TitleAuthor>
                <Title title={current.title}>{current.title}</Title>
                <Author>{current.author}</Author>
              </TitleAuthor>
              <SpinnerLive />
              <SiteIcon src={icons[current.site]} alt="" />
            </>
          )}
          {open && <Menu onBinClick={onBinClick} />}
        </>
      ) : (
        <Hint></Hint>
      )}
    </Wrapper>
  );
};

export default Current;
