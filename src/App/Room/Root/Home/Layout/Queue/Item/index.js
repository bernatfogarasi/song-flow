import { RoomContext } from "context";
import { useContext, useState } from "react";
import styled from "styled-components";
import imageSpotify from "assets/icons/spotify.png";
import imageYoutube from "assets/icons/youtube.png";
import useClickAway from "hooks/useClickAway";
import MenuRaw from "components/Menu";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
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
  position: relative;
  font-family: Montserrat;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  padding: 8px 15px;
  align-items: center;
`;

const Index = styled.div`
  text-align: center;
  opacity: 0.6;
`;

const Thumbnail = styled.img`
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  pointer-events: none;
  border: 1px solid #333;
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

const SiteIcon = styled.img`
  margin-left: auto;
  width: 20px;
  pointer-events: none;
`;

const Menu = styled(MenuRaw)``;

const siteIcons = { spotify: imageSpotify, youtube: imageYoutube };

const Item = ({ className, index, content }) => {
  const [open, setOpen] = useState(false);
  const { dragElement, setDragElement, onCurrent, onRemove, onInsert, onMove } =
    useContext(RoomContext);

  const onClickAway = () => {
    setOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  const onClick = () => {
    onCurrent(content);
    onRemove(index);
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const onDragStart = (event) => {
    setDragElement(event.target);
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ ...content, from: index })
    );
  };

  const onDragEnd = (event) => {
    setDragElement(undefined);
    event.target.classList.remove("over");
  };

  const onDragEnter = (event) => {
    event.stopPropagation();
    event.target.classList.add("over");
  };

  const onDragOver = (event) => {
    if (dragElement === event.target) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragLeave = (event) => {
    event.stopPropagation();
    event.target.classList.remove("over");
  };

  const onDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.target.classList.remove("over");
    setDragElement(undefined);
    const { from, ...content } = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );
    event.target.classList.remove("over");
    if (Number.isInteger(from)) onMove(from, index);
    else onInsert(content, index);
  };

  return (
    <Wrapper
      ref={ref}
      className={className}
      onContextMenu={onContextMenu}
      key={content.id}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, content.id)}
      onClick={onClick}
    >
      <Index>{index + 2}</Index>
      <Thumbnail src={content.thumbnailUrl} alt="" />
      {!open && (
        <>
          <TitleAuthor>
            <Title title={content.title}>{content.title}</Title>
            <Author title={content.author}>{content.author}</Author>
          </TitleAuthor>
          <SiteIcon src={siteIcons[content.site]} />
        </>
      )}
      {open && <Menu onBinClick={() => onRemove(index)} />}
    </Wrapper>
  );
};

export default Item;
