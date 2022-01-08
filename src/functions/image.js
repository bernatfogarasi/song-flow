import imageProfile from "assets/icons/profile.jpg";

export const sourceBuffer = (data, contentType = "image/png") =>
  `data:${contentType};base64,${Buffer.from(data).toString("base64")}`;

export const profilePicture = ({ data, contentType, url }) =>
  data && contentType ? sourceBuffer(data, contentType) : url || imageProfile;
