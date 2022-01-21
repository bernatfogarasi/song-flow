import styled from "styled-components";
import Content from "components/Content";
import useRoom from "hooks/useRoom";

const Wrapper = styled(Content)`
  margin-right: 10px;
`;

const Current = ({ className }) => {
  const { current } = useRoom();

  return (
    <Wrapper
      className={className}
      index={0}
      content={current}
      type="current"
    ></Wrapper>
  );
};

export default Current;
