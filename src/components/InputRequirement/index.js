import styled from "styled-components";

const Wrapper = styled.li`
  margin: 5px;
`;

const InputRequirement = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default InputRequirement;
