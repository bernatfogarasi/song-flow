import styled from "styled-components";

const Wrapper = styled.img`
  grid-row: 1 / 3;
  grid-column: 2;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  pointer-events: none;
  border: 1px solid #333;
`;

const Thumbnail = ({ className, src, ...props }) => {
  return <Wrapper className={className} src={src} {...props}></Wrapper>;
};

export default Thumbnail;
