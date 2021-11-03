import styled from "styled-components";

const Wrapper = styled.button`
  display: block;
  margin: 10px;
  padding: 10px 16px;
  border: 0;
  border-radius: 20px;
  font-family: MontserratMedium;
  font-size: 16px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    :after {
      content: "";
      position: absolute;
      border-radius: 24px;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border: white 2px solid;
    }
  }
`;

const Button = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Button;
