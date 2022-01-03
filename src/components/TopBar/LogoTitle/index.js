import styled from "styled-components";
import logo from "assets/icons/logo_white.png";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  font-family: MontserratSemibold;
  border-radius: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  transition: 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.img`
  width: 40px;
  filter: invert();
`;

const Text = styled.div`
  margin: 0 10px;
`;

const Logo = ({ title }) => {
  return (
    <Wrapper to="" title="TeamListener">
      <Icon src={logo} alt="" />
      {title && <Text>TeamListener</Text>}
    </Wrapper>
  );
};

export default Logo;
