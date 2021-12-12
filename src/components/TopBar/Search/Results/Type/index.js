import styled from "styled-components";

const Wrapper = styled.div`
  width: 80px;
  /* border: 1px solid black; */
  color: #444;
`;

const Type = (props) => {
  return <Wrapper {...props} />;
};

export default Type;
