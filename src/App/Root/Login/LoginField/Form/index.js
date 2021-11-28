import styled from "styled-components";
import SubmitButton from "components/SubmitButton";
import { useState } from "react";
import InputField from "components/InputField";

const Wrapper = styled.form``;

const Form = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    console.log("onSubmit called");
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    };
    const host =
      window.location.hostname === "localhost"
        ? "localhost:4000"
        : "api.teamlistener.com";
    fetch(`http://${host}/user/login`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.message !== "success") console.log(json.message);
        onLogin();
      })
      .catch((error) => console.log(error));
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
