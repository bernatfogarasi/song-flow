import styled from "styled-components";
import HintRaw from "components/Hint";

const Wrapper = styled(HintRaw)`
  color: #000;
  font-family: MontserratSemibold;
`;

const Hint = ({ className, ...props }) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Hint;
