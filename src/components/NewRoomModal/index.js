import Modal from "components/Modal";
import styled from "styled-components";
import Form from "./Form";

const Wrapper = styled(Modal)``;

const NewRoomModal = ({ onClose }) => {
  return (
    <Wrapper
      onClose={() => {
        onClose();
      }}
    >
      <Form onClose={onClose} />
    </Wrapper>
  );
};

export default NewRoomModal;
