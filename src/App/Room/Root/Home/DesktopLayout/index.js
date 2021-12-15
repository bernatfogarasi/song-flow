import TopBar from "components/TopBar";
import styled from "styled-components";
import Search from "./Search";

import VideoRaw from "./Video";
import Queue from "./Queue";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #111;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1900px;
  width: calc(100% - 20px);
  height: calc(100% - 150px);
  /* border: 1px solid orange; */
`;

const Members = styled.div`
  position: relative;
  ::before {
    content: "";
    height: 60px;
    width: 100%;
    background: red;
    position: absolute;
    top: -59px;
    background: linear-gradient(transparent, #111);
  }
  display: flex;
  margin: 0 auto;
  max-width: 1800px;
  width: calc(100% - 20px);
  height: 60px;
  padding: 10px;
  gap: 10px;
`;

const Member = styled.div`
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  /* border: 1px solid; */
`;

const MemberProfile = styled.div`
  background: #333;
  border: 1px solid #333;
  border-radius: 50%;
  aspect-ratio: 1;
  position: relative;
  width: 50px;
`;

const MemberActivity = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 12px;
  border: 2px solid #333;
`;

const MemberActive = styled(MemberActivity)`
  background: orange;
`;

const MemberInactive = styled(MemberActivity)`
  background: #111;
`;

const Video = styled(VideoRaw)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #000;
  aspect-ratio: 16/9;
  border-radius: 4px;
  /* border: 1px solid #333; */
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  border-top: 1px solid #333;
  background: #222;
`;

const members = [
  { name: "asdf", active: false, date: 1 },
  { name: "asdf", active: true, date: 2 },
  { name: "asdf", active: false, date: 3 },
  { name: "asdf", active: true, date: 4 },
  { name: "asdf", active: true, date: 5 },
  { name: "asdf", active: true, date: 6 },
];

const DesktopLayout = ({ className }) => {
  return (
    <Wrapper className={className}>
      <TopBar logo menu />
      <Content>
        <Search />
        <Queue />
        <Video />
      </Content>
      <Members>
        {members
          .sort((x, y) => {
            return x.active === y.active ? 0 : x.active ? -1 : 1;
          })
          .map(({ date, name, active }) => (
            <Member key={date}>
              <MemberProfile>
                {active ? <MemberActive /> : <MemberInactive />}
              </MemberProfile>
            </Member>
          ))}
      </Members>
      {/* <Controls></Controls> */}
    </Wrapper>
  );
};

export default DesktopLayout;
