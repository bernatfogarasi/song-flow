import { RoomContext } from "context";
import { useContext, useState } from "react";
import styled from "styled-components";
// import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import useClickAway from "hooks/useClickAway";
import MenuRaw from "components/Menu";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
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
  width: calc(100% - 30px);
  font-size: 14px;
  height: 40px;
  padding: 8px 15px;
  align-items: center;
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
  /* border: 1px solid; */
  opacity: 0.6;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SiteIcon = styled.img`
  grid-row: span 2;
  grid-column: 4;
  justify-self: center;
  width: 20px;
  align-self: top;
  pointer-events: none;
`;

const Menu = styled(MenuRaw)`
  grid-column: span 2;
  grid-row: span 2;
`;

const Item = ({ className, index, data }) => {
  const [open, setOpen] = useState(false);
  const { id, title, author, thumbnailUrl } = data;
  const {
    drag,
    setDrag,
    dragElement,
    setDragElement,
    onQueue,
    onCurrent,
    onRemove,
  } = useContext(RoomContext);

  const onClickAway = () => {
    setOpen(false);
  };

  const { ref } = useClickAway(onClickAway);

  const onDragStart = (event) => {
    setDragElement(event.target);
    setDrag(true);

    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ ...data, from: index })
    );
  };

  const onDragEnd = (event) => {
    setDragElement(undefined);
    setDrag(false);

    event.target.classList.remove("over");
  };

  const onDragEnter = (event) => {
    event.stopPropagation();
    event.target.classList.add("over");
    if (dragElement === event.target || !drag) return;
  };

  const onDragOver = (event) => {
    if (dragElement === event.target || !drag) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragLeave = (event) => {
    event.stopPropagation();
    event.target.classList.remove("over");
    if (dragElement === event.target || !drag) return;
  };

  const onDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (dragElement === event.target || !drag) return;
    setDragElement(undefined);
    const { from, ...data } = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );
    setDrag(undefined);
    event.target.classList.remove("over");
    onQueue(data, from, index);
    // dragElement.style.display = "none";
  };

  const onClick = () => {
    onCurrent(data, index);
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <Wrapper
      ref={ref}
      className={className}
      onContextMenu={onContextMenu}
      key={id}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, id)}
      onClick={onClick}
    >
      <Index>{index + 2}</Index>
      <Thumbnail src={thumbnailUrl} alt="" />
      {!open && (
        <>
          <Title title={title}>{title}</Title>
          <Author title={author}>{author}</Author>
          <SiteIcon src={youtube} />
        </>
      )}
      {open && <Menu onBinClick={() => onRemove(index)} />}
    </Wrapper>
  );
};

export default Item;
