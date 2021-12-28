import { RoomContext } from "context";
import useMousePosition from "hooks/useMousePosition";
import { useContext, useState } from "react";
import styled, { css } from "styled-components";

const height = "20px";

const Wrapper = styled.div`
  height: ${height};
  background: #333;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

const Fill = styled.div`
  border-radius: 4px;
  height: ${height};
  background: #eee;
  /* border-radius: 4px 0 0 4px; */
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
  const { progressBar, onProgress } = useContext(RoomContext);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const onClick = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    onProgress(x / bounds.width);
  };

  return (
    <Wrapper
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Fill style={{ width: `calc(100% * ${progressBar})` }}>
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
