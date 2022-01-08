import styled, { css } from "styled-components";

const Wrapper = styled.div`
  grid-row: 1;
  grid-column: 3;
  ${({ selected }) =>
    selected
      ? css`
          font-family: MontserratSemibold;
        `
      : css`
          font-family: MontserratMedium;
        `}
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Title = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Title;
