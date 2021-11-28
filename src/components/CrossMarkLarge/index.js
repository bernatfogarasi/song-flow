import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  width: 50px;
  height: 50px;
  margin-right: 50px;
  background: white;
  position: relative;
`;

const Line = styled.div`
  background: black;
  position: absolute;
  width: 40px;
  height: 6px;
  left: calc(50% - 20px);
  top: calc(50% - 3px);
`;

const LineForward = styled(Line)`
  transform: rotate(45deg);
`;

const LineBackward = styled(Line)`
  transform: rotate(-45deg);
`;

const CrossMarkLarge = () => {
  return (
    <Wrapper>
      <LineForward />
      <LineBackward />
    </Wrapper>
  );
};

export default CrossMarkLarge;
