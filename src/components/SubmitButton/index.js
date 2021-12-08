import styled from "styled-components";

const Wrapper = styled.button`
  font-family: MontserratSemibold;
  font-size: 18px;
  background: #f3ca20;
  width: calc(100% - 20px);
  text-align: center;
  color: black;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px 30px;
  margin: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    background: #816909;
  }
`;

const SubmitButton = ({ children, disabled, label }) => {
  return (
    <Wrapper type="submit" disabled={disabled}>
      {label}
      {children}
    </Wrapper>
  );
};

export default SubmitButton;
