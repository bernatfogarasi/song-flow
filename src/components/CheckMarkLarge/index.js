import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  width: 50px;
  height: 50px;
  margin-right: 50px;
  background: #f3ca20;
  position: relative;
`;

const Line = styled.div`
  background: black;
  position: absolute;
`;

const LineLeft = styled(Line)`
  width: 18px;
  height: 6px;
  left: 8px;
  top: 29px;
  transform: rotate(40deg);
`;

const LineRight = styled(Line)`
  width: 30px;
  height: 6px;
  left: 15px;
  top: 23px;
  transform: rotate(-50deg);
`;

const CheckMarkLarge = () => {
  return (
    <Wrapper>
      <LineLeft />
      <LineRight />
    </Wrapper>
  );
};

export default CheckMarkLarge;
