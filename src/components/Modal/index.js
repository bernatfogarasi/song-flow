import styled from "styled-components";

const Wrapper = styled.div``;

const Window = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #111;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 4px;
  z-index: 1;
  opacity: 0;
  animation: fade-in 0.2s forwards;
  animation-delay: 0.2s;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  background: #111;
  right: 0;
  bottom: 0;
  opacity: 0;
  animation: fade-in 0.2s forwards;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  padding: 10px;
  font-family: Montserrat;
`;

const CloseButton = styled.div`
  transition: opacity 0.2s;
  cursor: pointer;
  padding: 10px;
`;

const Modal = ({ className, children, title, onClose }) => {
  return (
    <Wrapper className={className}>
      <Overlay onClick={onClose} />
      <Window>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </Header>
        {children}
      </Window>
    </Wrapper>
  );
};

export default Modal;
