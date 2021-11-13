import styled from "styled-components";
import spotify from "../../../../../../assets/icons/spotify.png";
import youtube from "../../../../../../assets/icons/youtube.png";

const icons = { spotify, youtube };

const Wrapper = styled.div`
  cursor: pointer;
  .video-thumbnail-overlay {
    opacity: 0%;
  }
  :hover {
    .details {
      opacity: 50%;
    }

    .video-thumbnail-overlay {
      opacity: 50%;
    }
  }
  margin: 10px;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const Details = styled.div`
  margin: 0 10px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FirstRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const SecondRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const SiteIcon = styled.img`
  width: 20px;
`;

const VideoTitle = styled.div`
  font-family: MontserratSemibold;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VideoThumbnail = styled.img`
  width: 100px;
  border: 1px solid #333;
  border-radius: 3px;
`;

const CrossLine = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const CrossLineVertical = styled(CrossLine)`
  width: 8px;
  height: 40px;
`;

const CrossLineHorizontal = styled(CrossLine)`
  width: 40px;
  height: 8px;
`;

const VideoThumbnailOverlay = styled.div`
  position: absolute;
  width: 102px;
  height: 59px;
  background: black;
`;

const ChannelTitle = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  opacity: 60%;
`;

const Result = ({ data }) => {
  return (
    <Wrapper>
      <VideoThumbnail src={data.thumbnail} alt="" />
      <VideoThumbnailOverlay className="video-thumbnail-overlay">
        <CrossLineVertical />
        <CrossLineHorizontal />
      </VideoThumbnailOverlay>
      <Details className="details">
        <FirstRow>
          {data.length}
          <VideoTitle>{data.title}</VideoTitle>
          {/* <OpenInBrowserIcon /> */}
        </FirstRow>
        <SecondRow>
          <ChannelTitle>{data.channel.title}</ChannelTitle>
        </SecondRow>
      </Details>
      <a href={data.url} target="_blank" rel="noreferrer">
        <SiteIcon src={icons[data.site]} alt="" />
      </a>
      {/* {JSON.stringify(data)} */}
    </Wrapper>
  );
};

export default Result;
