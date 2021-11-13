import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 16px;
  width: 300px;
  border: 1px solid #333;
  background: #222;
  color: white;
  padding: 10px;
  font-family: Montserrat;
  :focus {
    border-color: #666;
    outline: none;
  }
  letter-spacing: ${({ type }) => (type === "password" ? "0.1em" : "0")};
  font-weight: ${({ type }) => (type === "password" ? "bold" : "none")};
  /* font-size: ${({ type }) => (type === "password" ? "26px" : "20px")};
  padding: ${({ type }) =>
    type === "password" ? "8px 10px 4px 10px" : "10px"}; */
`;

const Field = ({ label, type, required }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type={type} required />
    </Wrapper>
  );
};

export default Field;
