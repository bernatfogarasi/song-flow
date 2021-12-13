import styled from "styled-components";
import SubmitButton from "components/SubmitButton";
import { useEffect, useState } from "react";
import InputField from "components/InputField";
import { useLocation } from "react-router";
import { serverRequest } from "functions/requests";

const Wrapper = styled.form``;

const Form = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const path = new URLSearchParams(location.search).get("path");

  const onSubmit = async (event) => {
    event.preventDefault();
    const json = await serverRequest("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });
    if (json.message !== "success") return;
    if (path) window.location.href = path;
    else onLogin();
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
        autoComplete="email"
        label="Email"
        required
        onChange={onEmailChange}
        value={email}
      />
      <InputField
        autoComplete="off"
        label="Password"
        required
        type="password"
        onChange={onPasswordChange}
        value={password}
      />
      <SubmitButton>Log in</SubmitButton>
    </Wrapper>
  );
};

export default Form;
