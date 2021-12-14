import TopBar from "components/TopBar";
import styled from "styled-components";
import Search from "./Search";
import spotify from "assets/icons/spotify.png";
import youtube from "assets/icons/youtube.png";
import VideoRaw from "./Video";

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

const Queue = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QueueItem = styled.div`
  :hover {
    background: #333;
  }
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  width: calc(100% - 22px);
  background: #1c1c1c;
  padding: 10px;
  border-radius: 4px;
  gap: 20px;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
`;

const QueueItemCurrent = styled(QueueItem)`
  background: #444;
`;

const QueueItemTitle = styled.div`
  flex: 20%;
`;

const QueueItemAuthor = styled.div`
  flex: 40%;
  color: #999;
`;

const QueueItemSource = styled.img`
  width: 20px;
`;

const QueueItemCancelButton = styled.div``;

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
  { name: "asdf", active: false },
  { name: "asdf", active: true },
  { name: "asdf", active: false },
  { name: "asdf", active: true },
  { name: "asdf", active: true },
  { name: "asdf", active: true },
];

const queue = [
  { title: "Someday", author: "One Republic" },
  { title: "Easy On Me", author: "Adele" },
  { title: "Suicide Season", author: "Bring Me The Horizon" },
  { title: "Your Song", author: "Rita Ora" },
];

const DesktopLayout = ({ className }) => {
  return (
    <Wrapper className={className}>
      <TopBar logo menu />
      <Content>
        <Search />
        <Queue>
          <Video videoId="HKU96i_Qh8Y" />
          {queue.map(({ title, author }) => (
            <QueueItem key={title + author}>
              <QueueItemTitle>{title}</QueueItemTitle>
              <QueueItemAuthor>{author}</QueueItemAuthor>
              <QueueItemSource src={youtube} />
            </QueueItem>
          ))}
        </Queue>
      </Content>
      <Members>
        {members
          .sort((x, y) => {
            return x.active === y.active ? 0 : x.active ? -1 : 1;
          })
          .map(({ name, active }) => (
            <Member>
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
