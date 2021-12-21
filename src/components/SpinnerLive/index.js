import { useContext } from "react";
import { RoomContext } from "context";
import styled from "styled-components";
import { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  div {
    background: #fff;
    height: 15px;
    width: 4px;

    ${({ playing }) => !playing && "opacity: 0;"}
    animation: grow 1.2s infinite ease-in-out;
    :nth-child(2) {
      animation-delay: -1.1s;
    }
    :nth-child(3) {
      animation-delay: -1s;
    }
    transition: 0.2s;
  }

  @keyframes grow {
    0%,
    40%,
    100% {
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(1.8);
    }
  }
`;

const SpinnerLive = ({ className }) => {
  const { playing } = useContext(RoomContext);
  return (
    <Wrapper className={className} playing={playing}>
      <div />
      <div />
      <div />
    </Wrapper>
  );
};

export default SpinnerLive;
