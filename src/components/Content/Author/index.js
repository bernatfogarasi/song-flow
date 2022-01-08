import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 2;
  grid-column: 3;
  font-size: 13px;
  opacity: 0.6;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Author = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Author;
