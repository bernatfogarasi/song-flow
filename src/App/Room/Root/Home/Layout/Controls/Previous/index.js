import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Triangle = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid lightgrey;
  transform: scaleX(1.6);
`;
const Rectangle = styled.div`
  display: inline-block;
  height: 16px;
  width: 3px;
  background: lightgrey;
  margin-right: 1px;
`;

const Previous = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Rectangle />
      <Triangle />
    </Wrapper>
  );
};

export default Previous;
