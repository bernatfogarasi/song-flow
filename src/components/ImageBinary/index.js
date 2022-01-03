import styled from "styled-components";
import imageProfile from "assets/icons/profile.jpg";

const Wrapper = styled.img``;

const ImageBinary = ({
  className,
  src = imageProfile,
  type,
  data,
  ...props
}) => {
  return (
    <Wrapper
      className={className}
      src={
        (data &&
          `data:${type};base64,${Buffer.from(data).toString("base64")}`) ||
        src
      }
      {...props}
    />
  );
};

export default ImageBinary;
