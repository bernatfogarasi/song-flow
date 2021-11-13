import styled from "styled-components";
import Field from "./Field";
import Button from "./Button";
const Wrapper = styled.form``;

const Form = () => {
  return (
    <Wrapper>
      <Field label="Email" required />
      <Field label="Password" required type="password" />
      <Button>Log in</Button>
    </Wrapper>
  );
};

export default Form;
