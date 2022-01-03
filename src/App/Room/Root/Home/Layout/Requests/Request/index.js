import styled from "styled-components";
import ImageAccept from "assets/icons/accept.png";
import ImageReject from "assets/icons/reject.png";
import { useContext } from "react";
import { RoomContext } from "context";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #d6b11c;
  border-radius: 4px;
  padding: 5px;
  color: #000;
`;

const Button = styled.img`
  height: 20px;
  filter: brightness(0);
  cursor: pointer;
`;

const ButtonAccept = styled(Button)``;

const ButtonReject = styled(Button)``;

const Request = ({ className, request, index }) => {
  const { onAccept, onReject } = useContext(RoomContext);

  const onClickAccept = () => {
    onAccept(index);
  };
  const onClickReject = () => {
    onReject(index);
  };

  return (
    <Wrapper className={className}>
      <ButtonAccept src={ImageAccept} onClick={onClickAccept} />
      <ButtonReject src={ImageReject} onClick={onClickReject} />
      {request.username}
    </Wrapper>
  );
};

export default Request;
