import styled from "styled-components";
import { serverRequest } from "functions/requests";
import InputField from "components/InputField";
import SubmitButton from "components/SubmitButton";
import { useContext, useState } from "react";
import { SessionContext } from "context";
import LoaderCircleRaw from "components/LoaderCircle";

const Wrapper = styled.form``;

const LoaderCircle = styled(LoaderCircleRaw)`
  width: 14px;
  height: 14px;
  border: 4px solid;
  margin: auto;
  border-color: black transparent;
`;

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { refreshSession } = useContext(SessionContext);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const json = await serverRequest("/room/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name: name,
      }),
    });
    refreshSession();
    setName("");
    setLoading(false);
    onClose();
    console.log(json);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputField
        autoFocus
        label="Room name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      {loading ? (
        <SubmitButton label="" disabled>
          <LoaderCircle />
        </SubmitButton>
      ) : (
        <SubmitButton label="Create room" />
      )}
    </Wrapper>
  );
};

export default Form;
