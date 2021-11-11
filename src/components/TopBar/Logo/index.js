import styled from "styled-components";
import logo from "../../../assets/icons/logo3.png";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  position: fixed;
  font-family: MontserratMedium;
  margin: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #ddd;
  top: 0px;
  left: 0px;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 50px;
  filter: invert(100%);
  margin-bottom: 2px;
`;

const Text = styled.div`
  margin: 0 10px;
  margin-top: 2px;
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
