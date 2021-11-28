import styled from "styled-components";
import logo from "assets/icons/logo_white.png";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  font-family: MontserratSemibold;
  margin: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #ddd;
  text-decoration: none;
  :active {
    filter: brightness(70%);
  }
`;

const Icon = styled.img`
  width: 40px;
`;

const Text = styled.div`
  margin: 0 10px;
`;

const Logo = ({ title }) => {
  return (
    <Wrapper to="">
      <Icon src={logo} alt="" />
      {title && <Text>TeamListener</Text>}
    </Wrapper>
  );
};

export default Logo;
