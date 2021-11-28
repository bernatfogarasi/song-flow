import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  position: relative;
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

const InfoIcon = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border: 1px solid #777;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  div {
    visibility: hidden;
  }
  :hover div {
    visibility: visible;
  }
`;

const Info = styled.div`
  background: #fff;
  color: black;
  padding: 10px;
  font-size: 13px;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  width: 180px;
  text-align: left;
  border-radius: 4px;
  ::before {
    content: "";
    border: 10px solid;
    border-color: transparent;
    border-right-color: white;
    width: 2px;
    height: 2px;
    position: absolute;
    top: calc(50% - 10px);
    left: -20px;
  }
`;

const InputField = ({
  autoComplete,
  children,
  label,
  minLength,
  maxLength,
  onChange,
  pattern,
  required,
  title,
  type,
  value,
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children && (
        <InfoIcon>
          ?<Info>{children}</Info>
        </InfoIcon>
      )}
      <Input
        type={type}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        pattern={pattern}
        title={title}
        value={value}
      />
    </Wrapper>
  );
};

export default InputField;
