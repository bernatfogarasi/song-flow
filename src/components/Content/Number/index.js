import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 1;
  text-align: center;
  opacity: 0.6;
`;

const Number = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Number;
