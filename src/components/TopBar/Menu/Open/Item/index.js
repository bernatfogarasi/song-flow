import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

const Wrapper = styled(Link)`
  color: white;
  text-decoration: none;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #111;

  transition: 0.2s;

  border-radius: 4px;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
        `
      : css`
          :hover {
            background: #222;
            border-color: white;
            cursor: pointer;
          }
        `}
`;

const Text = styled.div``;
const Icon = styled.img`
  height: 100%;
  filter: invert();
`;

const Item = ({ className, children, src, onClick, disabled, to }) => {
  return (
    <Wrapper
      className={className}
      onClick={!disabled && onClick}
      disabled={disabled}
      to={to || "#"}
    >
      <Icon src={src} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Item;
