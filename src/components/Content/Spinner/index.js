import SpinnerLive from "components/SpinnerLive";
import styled from "styled-components";

const Wrapper = styled(SpinnerLive)`
  grid-row: 1 / 3;
  grid-column: 4;
`;

const Spinner = ({ className }) => {
  return <Wrapper className={className}>Spinner</Wrapper>;
};

export default Spinner;
