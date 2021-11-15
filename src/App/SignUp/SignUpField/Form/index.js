import styled from "styled-components";
import Field from "./Field";
import Button from "./Button";
import { useEffect, useState } from "react";

import InputRequirement from "../../../../components/InputRequirement";

const Wrapper = styled.form``;

const Form = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: email,
  //       email: "fogarasi.asdf123@gmail.com",
  //       password: "1231234",
  //     }),
  //   };
  //   fetch("http://localhost:4000/user/register").then();
  // };

  // const onUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const onEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const onSubmitClicked = () => {
  //   return;
  // };

  // const validateUsername = () => {
  //   if (username) return true;
  // };
  // const validateEmail = () => {
  //   if (email && email.length >= 6) return true;
  // };
  // const validatePassword = () => {
  //   if (password && password.length >= 10) return true;
  // };

  // useEffect(() => {
  //   console.log(username);
  //   validateUsername();
  // }, [username]);

  // useEffect(() => {
  //   console.log(email);
  // }, [email]);

  // useEffect(() => {
  //   console.log(password);
  // }, [password]);

  return (
    <Wrapper
    // action="http://localhost:4000/user/register"
    // method="POST"
    // onSubmit={onSubmit}
    >
      <Field
        label="Username"
        name="username"
        maxLength="20"
        pattern="^[A-Za-z][A-Za-z0-9_]{2,19}$"
        required

        // value={username}
        // onChange={onUsernameChange}
      >
        <InputRequirement>
          Between 3 and 20 characters in length.
        </InputRequirement>
        <InputRequirement>
          Contains only letters, numbers or underscores.
        </InputRequirement>
        <InputRequirement>Starts with a letter.</InputRequirement>
      </Field>
      <Field
        label="Email"
        name="email"
        minLength="6"
        pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$"
        required
        // value={email}
        // onChange={onEmailChange}
      />
      <Field
        label="Password"
        name="password"
        minLength="10"
        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
        required
        type="password"
        // onChange={onPasswordChange}
        // value={password}
      >
        <InputRequirement>More than 10 characters long.</InputRequirement>
        <InputRequirement>
          Contains each of the following:
          <br /> - lowercase letter
          <br /> - uppercase letter
          <br /> - number
          <br /> - special character
        </InputRequirement>
      </Field>
      <Button
      // onClick={onSubmitClicked}
      >
        Sign up
      </Button>
    </Wrapper>
  );
};

export default Form;
