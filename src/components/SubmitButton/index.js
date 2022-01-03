import styled, { css } from "styled-components";

const Wrapper = styled.button`
  font-family: MontserratSemibold;
  font-size: 18px;
  background: #d6b11c;
  width: calc(100% - 20px);
  text-align: center;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px 30px;
  margin: 10px;
  margin-top: 20px;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
          color: #555;
        `
      : css`
          color: black;
          cursor: pointer;
          :hover {
            transform: scale(1.05);
          }
          :active {
            background: #816909;
          }
        `}
  transition: 0.2s;
`;

const SubmitButton = ({ className, children, disabled, ...props }) => {
  return (
    <Wrapper className={className} type="submit" disabled={disabled} {...props}>
      {children}
    </Wrapper>
  );
};

export default SubmitButton;
