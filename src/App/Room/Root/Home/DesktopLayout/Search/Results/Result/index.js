import styled from "styled-components";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import { RoomContext } from "context";
import { useContext } from "react";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  user-select: none;
  cursor: move;

  :hover {
    background: #333;
  }
  transition: 0.2s;
  display: flex;
  align-items: center;
  background: #1c1c1c;
  border-radius: 4px;
`;

const Thumbnail = styled.img`
  aspect-ratio: 16/9;
  margin: auto 0;
  border-radius: 3px;
  max-width: 150px;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  overflow: hidden;
`;

const Title = styled.div`
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: MontserratSemibold;
`;

const Author = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: Montserrat;
  opacity: 60%;
`;

const SiteIcon = styled.img`
  width: 20px;
`;

const Result = ({ data }) => {
  const { onNext } = useContext(RoomContext);

  // let dragElement;

  // const onMouseDown = (event) => {
  //   console.log(event.target);
  //   dragElement = event.target;
  //   const rect = dragElement.getBoundingClientRect();
  // };

  const onClick = () => {
    onNext(data);
  };

  // const onDrag = (event) => {
  //   event.preventDefault();
  //   console.log("drag");
  // };

  return (
    <Wrapper onClick={onClick}>
      {/* <Wrapper onMouseDown={onMouseDown}> */}
      <Thumbnail src={data.thumbnail} alt="" />
      <Details>
        <Title title={data.title}>{data.title}</Title>
        <Author>{data.channel.title}</Author>
        {/* <a href={data.url} target="_blank" rel="noreferrer"> */}
        {/* </a> */}
      </Details>
      {/* <SiteIcon src={icons[data.site]} alt="" /> */}
    </Wrapper>
  );
};

export default Result;
