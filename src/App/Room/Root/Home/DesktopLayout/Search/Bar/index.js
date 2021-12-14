import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
  position: relative;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 0px;
  padding: 5px 50px 5px 5px;
  font-size: 20px;
  width: 100%;
  background: #1a1a1a;
  color: white;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  pointer-events: none;
  transform: translateY(-14px);
`;

const Circle = styled.div`
  position: absolute;
  border: 2px solid #aaa;
  height: 16px;
  width: 16px;
  border-radius: 16px;
`;

const Line = styled.hr`
  position: absolute;
  width: 12px;
  border: 1px solid #aaa;
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
