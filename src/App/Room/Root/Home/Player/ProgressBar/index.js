import useMousePosition from "hooks/useMousePosition";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 5vh;
  background: #333;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
`;

const Fill = styled.div`
  height: 5vh;
  background: #eee;
  border-radius: 4px 0 0 4px;
  animation: load 200s linear infinite;
  @keyframes load {
    0% {
      width: 8px;
    }
    100% {
      width: 100%;
    }
  }
  cursor: pointer;
`;

const Cursor = styled.div`
  border: 4px solid;
  border-color: black transparent;
  height: calc(5vh - 8px);

  position: absolute;
  cursor: pointer;
`;

const CursorLine = styled.div`
  transform: translateX(-50%);
  top: -2px;
  position: absolute;
  cursor: pointer;
  height: 5vh;
  width: 2px;
  background: black;
`;

const ProgressBar = () => {
  const [hover, setHover] = useState();
  const mouse = useMousePosition();

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Fill>
        {hover && (
          <Cursor style={{ left: mouse.x - 3 }}>
            <CursorLine />
          </Cursor>
        )}
      </Fill>
    </Wrapper>
  );
};

export default ProgressBar;
