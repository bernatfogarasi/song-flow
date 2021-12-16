import TopBarRaw from "components/TopBar";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const TopBar = styled(TopBarRaw)`
  grid-row: 1;
`;

const Content = styled.div`
  overflow: hidden;
  grid-row: 2;
`;

const Page = ({ className, children, logo, search, menu }) => {
  return (
    <Wrapper className={className}>
      <TopBar logo={logo} search={search} menu={menu} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Page;
