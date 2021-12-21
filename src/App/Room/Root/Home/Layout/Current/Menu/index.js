import styled from "styled-components";
import IconBin from "components/IconBin";

const Wrapper = styled.div`
  display: flex;

  justify-content: right;
  align-items: center;
`;

const Menu = ({ className }) => {
  return (
    <Wrapper className={className}>
      <IconBin />
    </Wrapper>
  );
};

export default Menu;
