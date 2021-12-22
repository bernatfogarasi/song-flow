import styled from "styled-components";
import { useContext, useState } from "react";
import { css } from "styled-components";
import { RoomContext } from "context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: 0.2s;
  div {
    transition: 0.2s;
  }
`;

const Handle = styled.div`
  margin: auto;
  width: 4px;
  height: 2px;
  background: #fff;
`;

const Lid = styled.div`
  ${({ hover }) =>
    hover &&
    css`
      /* transform-origin: left top; */
      transform: rotate(20deg) translate(-1px, -4px);
      div {
        background: red;
      }
    `}
  transition: 0.2s;
`;

const LidBody = styled.div`
  margin: auto;
  width: 16px;
  height: 2px;
  background: #fff;
  margin-bottom: 2px;
`;

const Body = styled.div`
  margin: auto;
  height: 15px;
  width: 8px;
  border: 2px solid #fff;
  border-top: 0;
  ::after {
    content: "";
    display: block;
    width: 2px;
    height: 12px;
    margin: auto;
    margin-top: 0px;
    background: #fff;
  }
  ${({ hover }) =>
    hover &&
    css`
      /* transform-origin: left top; */
      border-color: red;
      ::after {
        background: red;
      }
    `}
`;

const IconBin = ({ className, onClick = () => {} }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Wrapper
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <Lid hover={hover}>
        <Handle />
        <LidBody />
      </Lid>
      <Body hover={hover} />
    </Wrapper>
  );
};

export default IconBin;
