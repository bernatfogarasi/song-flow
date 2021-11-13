import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #333;
  width: fit-content;
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto;
`;

const Card = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Card;
