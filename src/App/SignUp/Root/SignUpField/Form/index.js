import styled from "styled-components";
import { useState } from "react";
import SubmitButton from "components/SubmitButton";
import InputRequirement from "components/InputRequirement";
import InputField from "components/InputField";

const Wrapper = styled.form``;

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email,
        password,
      }),
    };

    const host =
      window.location.hostname === "localhost"
        ? "localhost:4000"
        : "api.teamlistener.com";
    fetch(`http://${host}/user/register`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json.message === "success"
          ? (window.location.href = "/signup/confirmation")
          : null;
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
      <InputField
        autoComplete="nickname"
        autoFocus={email.length > 3}
        label="Username"
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
      </InputField>
      <InputField
        autoComplete="email"
        label="Email"
        minLength="6"
        pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$"
        required
        value={email}
        onChange={onEmailChange}
      />
      <InputField
        autoComplete="password"
        label="Password"
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
      </InputField>
      <SubmitButton>Sign up</SubmitButton>
    </Wrapper>
  );
};

export default Form;
