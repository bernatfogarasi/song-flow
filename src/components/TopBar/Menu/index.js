import { useEffect, useState } from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import Open from "./Open";

const Wrapper = styled.div`
  display: flex;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  height: fit-content;
  margin: 10px;
  :hover {
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

const Line = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background: #ddd;
`;

const Menu = () => {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = (event) => {
    event && event.stopPropagation();

    setOpen(false);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <Wrapper onClick={onClickOpen}>
      {/* <LoginButton />
      <SignUpButton /> */}
      <Hamburger>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      {open && <Open onClickClose={onClickClose} onClick={onClickClose} />}
    </Wrapper>
  );
};

export default Menu;
