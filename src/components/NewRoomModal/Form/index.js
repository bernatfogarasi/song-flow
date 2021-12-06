import styled from "styled-components";
import { serverRequest } from "functions/serverRequest";
import InputField from "components/InputField";
import SubmitButton from "components/SubmitButton";
import { useEffect, useState } from "react";
import useFocus from "hooks/useFocus";

const Wrapper = styled.form``;

const Form = ({ onClose }) => {
  const [name, setName] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    onClose();
    const json = await serverRequest("/room/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name: name,
      }),
    });
    console.log(json);
    setName("");
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputField
        autoFocus
        label="Room name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <SubmitButton label="Create room" />
    </Wrapper>
  );
};

export default Form;
