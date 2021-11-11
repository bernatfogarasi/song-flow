import styled from "styled-components";
import openInBrowser from "../../assets/icons/open_in_browser.png";

const Wrapper = styled.img`
  width: 18px;
  height: 18px;
  filter: invert();
  display: block;
`;

const OpenInBrowserIcon = () => {
  return <Wrapper src={openInBrowser} alt=""></Wrapper>;
};

export default OpenInBrowserIcon;
