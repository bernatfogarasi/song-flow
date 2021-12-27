import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
`;

const Line = styled.div`
  height: 5px;
  background: #fff;
  position: absolute;
`;

const Shaft = styled(Line)`
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const Head = styled.div`
  border: 5px solid;
  border-left: none;
  border-bottom: none;
  height: 50%;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 10px), -50%) rotate(45deg);
`;

const IconArrow = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Shaft />
      <Head />
    </Wrapper>
  );
};

export default IconArrow;
