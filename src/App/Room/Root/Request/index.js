import Button from "components/Button";
import Page from "components/Page";
import styled from "styled-components";
import ButtonLarge from "components/ButtonLarge";
import { serverRequest } from "functions/requests";

const Wrapper = styled(Page)`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ButtonRequest = styled(Button)``;

const Request = ({ className }) => {
  const onClick = async () => {
    const json = await serverRequest("/room/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        shortId: window.location.pathname.split("/").at(-1),
      }),
    });
    console.log(json);
  };

  return (
    <Wrapper className={className} logo search menu logout>
      You are not a member of this room.
      <ButtonLarge to="#" onClick={onClick}>
        Request access
      </ButtonLarge>
    </Wrapper>
  );
};

export default Request;
