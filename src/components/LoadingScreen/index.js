import styled from "styled-components";
import TopBar from "components/TopBar";
import LoaderCircle from "components/LoaderCircle";

const Wrapper = styled.div``;

const LoaderCircleCentered = styled(LoaderCircle)`
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
`;

const LoadingScreen = () => {
  return (
    <Wrapper>
      <TopBar logo />
      <LoaderCircleCentered />
    </Wrapper>
  );
};

export default LoadingScreen;
