import styled from "styled-components";
import logo from "../../../assets/icons/logo3.png";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  font-family: MontserratMedium;
  margin: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ddd;

  text-decoration: none;
`;

const Icon = styled.img`
  width: 40px;
  filter: invert(100%);
`;

const Text = styled.div`
  margin: 0 10px;
`;

const Logo = () => {
  return (
    <Wrapper to="">
      <Icon src={logo} alt="" />
      <Text>TeamListener</Text>
    </Wrapper>
  );
};

export default Logo;
