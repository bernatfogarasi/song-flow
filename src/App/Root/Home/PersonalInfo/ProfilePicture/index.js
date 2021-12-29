import { SessionContext } from "context";
import { serverRequest } from "functions/requests";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import imageProfile from "assets/icons/profile.jpg";
import imageAccept from "assets/icons/accept.png";
import imageReject from "assets/icons/reject.png";
import LoaderCircle from "components/LoaderCircle";

const Wrapper = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: 0.2s;
  border: 2px solid #888;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: 0.2s;
  overflow: hidden;
  align-items: center;
`;

const Profile = styled.img`
  height: 100%;
`;

const Edit = styled.input`
  display: none;
`;
const Button = styled.button`
  border: none;
  background: none;
  height: 40px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: 0.2s;
`;

const ButtonImage = styled.img`
  height: 100%;
`;

const ProfilePicture = () => {
  const { session, refreshSession } = useContext(SessionContext);
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [session]);

  const onChange = (event) => {
    setFile(event.target.files?.[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setFile("");
    const formData = new FormData();
    formData.append("file", file);
    const json = await serverRequest("/user/edit/profile-picture", {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    refreshSession();
  };

  const onCancel = (event) => {
    event.preventDefault();
    setFile("");
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {file && (
          <Button type="submit">
            <ButtonImage src={imageAccept} />
          </Button>
        )}
        <Label htmlFor="input" title="Click to edit">
          {loading ? (
            <LoaderCircle />
          ) : (
            <Profile
              src={
                file
                  ? URL.createObjectURL(file)
                  : `data:${
                      session.profilePicture.contentType
                    };base64,${Buffer.from(
                      session.profilePicture.data
                    ).toString("base64")}` || imageProfile
              }
            />
          )}
        </Label>
        <Edit type="file" id="input" onChange={onChange} />
        {file && (
          <Button onClick={onCancel}>
            <ButtonImage src={imageReject} />
          </Button>
        )}
      </Form>
    </Wrapper>
  );
};

export default ProfilePicture;
