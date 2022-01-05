import { SessionContext } from "context";
import { serverRequest } from "functions/requests";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import imageProfile from "assets/icons/profile.jpg";
import imageAccept from "assets/icons/accept.png";
import imageReject from "assets/icons/reject.png";
import LoaderCircle from "components/LoaderCircle";
import imageCompression from "browser-image-compression";
import ProfilePictureRaw from "components/ProfilePicture";

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
  /* aspect-ratio: 1; */
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: 0.2s;
  overflow: hidden;
  align-items: center;
`;

const ProfilePicture = styled(ProfilePictureRaw)`
  border: 2px solid;
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

const Profile = () => {
  const { session, refreshSession } = useContext(SessionContext);
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [session]);

  const onChange = async (event) => {
    console.log("Change");
    const fileOriginal = event.target.files?.[0];
    event.target.value = "";
    if (!fileOriginal) return;
    const options = { maxSizeMB: 0.05, maxWidthOrHeight: 256 };
    const fileReduced = await imageCompression(fileOriginal, options);
    setFile(fileReduced);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;
    setLoading(true);
    setFile("");
    const formData = new FormData();
    formData.append("file", file);
    await serverRequest("/user/edit/profile-picture", {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    refreshSession();
  };

  const onCancel = (event) => {
    // event.preventDefault();
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
            <ProfilePicture
              src={
                file
                  ? URL.createObjectURL(file)
                  : session.profilePicture.data
                  ? `data:${
                      session.profilePicture.contentType
                    };base64,${Buffer.from(
                      session.profilePicture.data
                    ).toString("base64")}`
                  : session.profilePicture.url || imageProfile
              }
            />
          )}
        </Label>
        <Edit type="file" id="input" onChange={onChange} on />
        {file && (
          <Button onClick={onCancel}>
            <ButtonImage src={imageReject} />
          </Button>
        )}
      </Form>
    </Wrapper>
  );
};

export default Profile;
