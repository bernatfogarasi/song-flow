import InputField from "components/InputField";
import SubmitButton from "components/SubmitButton";
import { serverRequest } from "functions/requests";
import useHint from "hooks/useHint";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  width: 100%;
`;

const Invalid = styled.div`
  color: #aa1616;
  /* border: 1px solid; */
  width: 90%;
  margin: auto;
`;

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const invalid = {
    username:
      username === ""
        ? true
        : username.length > 20
        ? "must be at most 20 characters"
        : !username.match(/^[a-zA-Z0-9_-]*$/)
        ? "must only contain, letters, numbers, underscores and dashes"
        : false,
    email:
      email === ""
        ? true
        : email.length < 6
        ? "must be at least 6 characters"
        : !email.match(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/)
        ? "must be valid"
        : false,
    password:
      password === ""
        ? true
        : password.length < 8
        ? "must be at least 8 characters"
        : false,
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

  const { setHint } = useHint();

  const onSubmit = async (event) => {
    event.preventDefault();
    const json = await serverRequest("/user/auth/manual/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email,
        password,
      }),
    });
    if (json.message !== "success") return setHint(json.message);
    window.location.href = "/signup/confirmation";
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputField
        autoComplete="on"
        autoFocus={email.length > 3}
        label="Username"
        maxLength={20}
        minLength={1}
        required
        value={username}
        onChange={onUsernameChange}
      ></InputField>
      <Invalid>{invalid.username}</Invalid>
      <InputField
        autoComplete="email"
        label="Email"
        required
        value={email}
        onChange={onEmailChange}
      />
      <Invalid>{invalid.email}</Invalid>
      <InputField
        autoComplete="password"
        label="Password"
        minLength={10}
        required
        type="password"
        onChange={onPasswordChange}
        value={password}
      ></InputField>
      <Invalid>{invalid.password}</Invalid>
      <SubmitButton
        disabled={invalid.username || invalid.email || invalid.password}
      >
        Sign up
      </SubmitButton>
    </Wrapper>
  );
};

export default Form;
