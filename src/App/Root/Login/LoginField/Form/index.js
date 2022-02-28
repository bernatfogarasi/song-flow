import InputField from "components/InputField";
import SubmitButton from "components/SubmitButton";
import { serverRequest } from "functions/requests";
import useHint from "hooks/useHint";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  width: 100%;
`;

const Form = ({ className, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const urlSearchParams = new URLSearchParams(window.location.search);
  const path = urlSearchParams.get("path");
  const { setHint } = useHint();

  const onSubmit = async (event) => {
    event.preventDefault();
    const json = await serverRequest("/user/auth/manual/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });
    if (json.message !== "success") return setHint(json.message);
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
    <Wrapper className={className} onSubmit={onSubmit}>
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
