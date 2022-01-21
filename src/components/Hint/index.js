import useHint from "hooks/useHint";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  z-index: 100;
  ${({ config }) =>
    `
      color: ${config.color};
      background: ${config.background};
    `};
  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}
`;

const Hint = ({ className, children, ...props }) => {
  const { hint, config } = useHint();
  return (
    <Wrapper className={className} {...props} show={hint} config={config}>
      {hint}
    </Wrapper>
  );
};

export default Hint;
