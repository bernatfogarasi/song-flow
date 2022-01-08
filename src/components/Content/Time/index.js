import TimeRaw from "components/Time";
import styled from "styled-components";

const Wrapper = styled(TimeRaw)`
  grid-row: 1 / 3;
  grid-column: 4;
  opacity: 0.6;
  min-width: 60px;
  text-align: right;
  margin-left: auto;
`;

const Time = ({ className, children, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Time;
