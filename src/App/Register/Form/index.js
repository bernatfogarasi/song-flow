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
  font-family: Montserrat;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 20px;
  border: 0;
  width: 30vw;
  background: #333;
  color: white;
`;

// const HostInput = styled(Input)``;

const SubmitButton = styled(Button)`
  background: white;
`;

const Form = () => {
  return (
    <Wrapper>
      <Item>
        <Label>Email</Label>
        <Input type="text" required />
      </Item>
      <Item>
        <Label>Password</Label>
        <Input type="text" required />
      </Item>
      <SubmitButton>Register</SubmitButton>
    </Wrapper>
  );
};

export default Form;
