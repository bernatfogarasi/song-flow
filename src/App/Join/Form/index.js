import styled from "styled-components";
import Button from "../../../components/Button";

const Wrapper = styled.form`
  top: 20vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background: #181818;
  border-radius: 5px;
  width: fit-content;
  margin: auto;
  padding: 20px;
  border: 1px solid #282828;
`;

const Item = styled.div`
  margin: 10px 0px;
`;

const Label = styled.div``;

const Input = styled.input`
  margin-top: 10px;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px 20px;
  border: 0;
  background: #333;
  color: white;
`;

const SubmitButton = styled(Button)`
  background: white;
`;

const Form = () => {
  return (
    <Wrapper>
      <Item>
        <Label>Host</Label>
        <Input type="text" required />
      </Item>
      <Item>
        <Label>Room</Label>
        <Input type="text" required />
      </Item>
      <SubmitButton>Join</SubmitButton>
    </Wrapper>
  );
};

export default Form;
