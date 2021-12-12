import styled from "styled-components";
import TopBar from "components/TopBar";
import LoaderCircle from "components/LoaderCircle";

const Wrapper = styled.div``;

const LoaderCircleCentered = styled(LoaderCircle)`
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
`;

const LoadingScreen = ({ logo, search, menu }) => {
  return (
    <Wrapper>
      <TopBar logo={logo} search={search} menu={menu} />
      <LoaderCircleCentered />
    </Wrapper>
  );
};

export default LoadingScreen;
