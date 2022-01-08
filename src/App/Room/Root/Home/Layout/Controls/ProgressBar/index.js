import useMousePosition from "hooks/useMousePosition";
import useRoom from "hooks/useRoom";
import { useState } from "react";
import styled, { css } from "styled-components";

const height = "20px";

const Wrapper = styled.div`
  height: ${height};
  background: #333;
  width: 100%;
  /* border-radius: 4px; */
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
        `
      : css`
          cursor: pointer;
        `}
`;

const Fill = styled.div`
  /* border-radius: 4px; */
  height: ${height};
  background: #d6b11c;
  transition: 0.3s;
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
    `};
`;

const Cursor = styled.div`
  border: 4px solid;
  border-color: black transparent;
  box-sizing: border-box;
  height: ${height};
  position: absolute;
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
    `}
`;

const CursorLine = styled.div`
  height: ${height};
  width: 2px;
  position: absolute;
  top: -2px;
  transform: translateX(-50%);
  background: black;
  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
    `}
`;

const ProgressBar = ({ className }) => {
  const { progressBar, current, onProgress } = useRoom();
  const [hover, setHover] = useState();
  const mouse = useMousePosition();

  const disabled = !current?.id;

  const onMouseEnter = () => {
    if (disabled) return;
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const onClick = (event) => {
    if (disabled) return;
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
      disabled={disabled}
    >
      <Fill
        disabled={disabled}
        style={{ width: `calc(100% * ${progressBar})` }}
      >
        {hover && (
          <Cursor disabled={disabled} style={{ left: mouse.x - 3 }}>
            <CursorLine disabled={disabled} />
          </Cursor>
        )}
      </Fill>
    </Wrapper>
  );
};

export default ProgressBar;
