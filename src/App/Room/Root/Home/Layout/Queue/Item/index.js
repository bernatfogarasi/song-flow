import { RoomContext } from "context";
import { useContext, useState } from "react";
import styled from "styled-components";
// import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import useClickAway from "hooks/useClickAway";
import MenuRaw from "components/Menu";

const Wrapper = styled.div`
  display: flex;
  /* grid-template-columns: auto auto 1fr auto;
  grid-template-rows: 50% 50%; */
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
  /* border-top-color: transparent; */
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
  pointer-events: none;
  border: 1px solid;
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
          <TitleAuthor>
            <Title title={title}>{title}</Title>
            <Author title={author}>{author}</Author>
          </TitleAuthor>
          <SiteIcon src={youtube} />
        </>
      )}
      {open && <Menu onBinClick={() => onRemove(index)} />}
    </Wrapper>
  );
};

export default Item;
