import IconLogoutRaw from "components/IconLogout";
import styled from "styled-components";
import imageLogout from "assets//icons/logout.png";
import { serverRequest } from "functions/requests";

const Wrapper = styled.div`
  height: 25px;
  cursor: pointer;
  padding: 10px;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(1);
  }
  transition: 0.2s;
  @media (max-width: 800px) {
    display: none;
  }
`;

const IconLogout = styled.img`
  filter: invert();
  height: 100%;
`;

const Logout = ({ className }) => {
  const onClick = async () => {
    const json = await serverRequest("/user/logout");
    if (json.message == "success") window.location.href = "/";
  };
  return (
    <Wrapper className={className} onClick={onClick}>
      <IconLogout src={imageLogout} />
    </Wrapper>
  );
};

export default Logout;
