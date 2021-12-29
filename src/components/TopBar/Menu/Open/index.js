import styled from "styled-components";
import Item from "./Item";
import imageLogout from "assets/icons/logout.png";
import useClickAway from "hooks/useClickAway";
import imageClose from "assets/icons/cross.png";
import imageHome from "assets/icons/home.png";
import { useState } from "react";
import NewRoomModal from "components/NewRoomModal";
import { Link } from "react-router-dom";
import { serverRequest } from "functions/requests";

const Wrapper = styled.div`
  width: 100vw;
  max-width: 200px;
  position: absolute;
  right: 0px;
  top: 0px;
  box-sizing: border-box;
  height: calc(100vh - 20px);
  background: #222;
  z-index: 1;
  border: 1px solid #aaa;
  padding: 5px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 10px;
`;

const ButtonClose = styled.img`
  height: 30px;
  width: 30px;
  margin-left: auto;
  filter: invert();
  cursor: pointer;
  padding: 15px;
  :hover {
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

const Open = ({ className, onClickClose }) => {
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);
  const { ref } = useClickAway(onClickClose);

  const onClickHome = () => {};

  const onClickLogout = async () => {
    const json = await serverRequest("/user/logout");
    if (json.message == "success") window.location.href = "/";
  };

  return (
    <Wrapper ref={ref} className={className}>
      <ButtonClose src={imageClose} onClick={onClickClose} />
      <Item
        src={imageHome}
        to="/"
        onClick={onClickHome}
        disabled={window.location.pathname === "/"}
      >
        Home
      </Item>
      <Item src={imageLogout} onClick={onClickLogout}>
        Logout
      </Item>
    </Wrapper>
  );
};

export default Open;
