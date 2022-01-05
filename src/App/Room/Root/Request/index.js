import Page from "components/Page";
import styled from "styled-components";
import ButtonLarge from "components/ButtonLarge";
import { serverRequest } from "functions/requests";

const Wrapper = styled(Page)`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const RoomName = styled.div`
  font-size: 30px;
  color: #d6b11c;
`;

const Message = styled.div`
  opacity: 0.6;
`;

const Members = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MembersCount = styled.div``;

const Request = ({ className, info }) => {
  const onClick = async () => {
    await serverRequest("/room/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        shortId: window.location.pathname.split("/").at(-1),
      }),
    });
    window.location.reload();
  };

  return (
    <Wrapper className={className} logo search menu logout>
      <RoomName>{info?.name}</RoomName>
      <Members>
        Members
        <MembersCount>{info?.memberCount}</MembersCount>
      </Members>
      <Message>You are not a member of this room.</Message>
      <ButtonLarge to="#" onClick={onClick}>
        Request access
      </ButtonLarge>
    </Wrapper>
  );
};

export default Request;
