import { RoomContext } from "context";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 20px;
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
  background: #111;
  cursor: pointer;
  border-radius: 4px;
  width: calc(100% - 30px);
  font-size: 14px;
  height: 40px;
  padding: 8px 15px;
  align-items: center;
`;

const Thumbnail = styled.img`
  grid-row: span 2;
  height: 100%;
  pointer-events: none;
`;

const Title = styled.div`
  font-family: MontserratMedium;
  grid-column: 2;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = styled.div`
  grid-column: 2;
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
  justify-self: center;
  width: 20px;
  align-self: top;
  pointer-events: none;
`;

const Current = ({ className }) => {
  const { current } = useContext(RoomContext);
  return (
    <Wrapper className={className}>
      {current && (
        <>
          <Thumbnail src={current.thumbnailUrl} alt="" />
          <Title title={current.title}>{current.title}</Title>
          <Author>{current.author}</Author>
        </>
      )}
    </Wrapper>
  );
};

export default Current;
