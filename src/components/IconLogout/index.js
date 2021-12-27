import IconArrow from "components/IconArrow";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 4px solid;
  width: 20px;
  padding-left: 10px;
`;

const Arrow = styled(IconArrow)``;

const IconLogout = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Arrow />
    </Wrapper>
  );
};

export default IconLogout;
