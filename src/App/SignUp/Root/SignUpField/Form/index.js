import styled from "styled-components";
import { useState } from "react";

import Field from "./Field";
import Button from "./Button";
import InputRequirement from "components/InputRequirement";

const Wrapper = styled.form``;

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email,
        password,
      }),
    };
    // console.log(requestOptions);

    const host =
      window.location.hostname === "localhost"
        ? "localhost:4000"
        : "api.teamlistener.com";
    fetch(`http://${host}/user/register`, requestOptions)
      .then((response) => response.json())
      .then((json) => json.message)
      .then((message) => {
        console.log(message);
        return message === "success"
          ? (window.location.href = "/signup/confirmation")
          : console.log(message);
      })
      .catch((error) => console.log(error));
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Field
        label="Username"
        name="username"
        maxLength="20"
        pattern="^[A-Za-z][A-Za-z0-9_]{2,19}$"
        required
        value={username}
        onChange={onUsernameChange}
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
        value={email}
        onChange={onEmailChange}
      />
      <Field
        label="Password"
        name="password"
        minLength="10"
        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
        required
        type="password"
        onChange={onPasswordChange}
        value={password}
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
