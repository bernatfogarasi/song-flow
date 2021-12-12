import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px auto;
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
`;

const Input = styled.input`
  border-radius: 20px;
  border: 0px;
  padding: 10px 20px 10px 50px;
  font-size: 20px;
  width: 30vw;
`;

const Icon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transform: translate(10px, -4px);
`;

const Circle = styled.div`
  position: absolute;
  border: 2px solid black;
  height: 16px;
  width: 16px;
  border-radius: 16px;
`;

const Line = styled.hr`
  position: absolute;
  width: 12px;
  border: 1px solid black;
  transform: translate(14px, 12px) rotate(45deg);
`;

const Bar = ({ onChange }) => {
  return (
    <Wrapper>
      <Icon>
        <Circle />
        <Line />
      </Icon>
      <Input type="text" onChange={onChange} />
    </Wrapper>
  );
};

export default Bar;
