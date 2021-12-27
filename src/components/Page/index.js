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

const Page = ({ className, children, logo, search, menu, logout }) => {
  return (
    <Wrapper>
      <TopBar logo={logo} search={search} menu={menu} logout={logout} />
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};

export default Page;
