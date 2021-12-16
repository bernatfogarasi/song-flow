import useMousePosition from "hooks/useMousePosition";
import { useState } from "react";
import styled from "styled-components";

const height = "10px";

const Wrapper = styled.div`
  height: ${height};
  background: #333;
  width: 100%;
  /* border-radius: 4px; */
  cursor: pointer;
`;

const Fill = styled.div`
  height: ${height};
  background: #eee;
  /* border-radius: 4px 0 0 4px; */
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
  box-sizing: border-box;
  height: ${height};
  position: absolute;
  cursor: pointer;
`;

const CursorLine = styled.div`
  transform: translateX(-50%);
  top: -2px;
  position: absolute;
  cursor: pointer;
  height: ${height};
  width: 2px;
  background: black;
`;

const ProgressBar = ({ className }) => {
  const [hover, setHover] = useState();
  const mouse = useMousePosition();

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
    >
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
