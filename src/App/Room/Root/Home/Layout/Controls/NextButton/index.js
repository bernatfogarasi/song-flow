import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { RoomContext } from "context";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ active }) => (active ? "opacity : 0.8" : "opacity: 0.3")};
`;

const Triangle = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid white;
  transform: scaleX(1.6);
`;
const Rectangle = styled.div`
  display: inline-block;
  height: 16px;
  width: 3px;
  background: white;
  margin-left: 1px;
`;

const NextButton = ({ className }) => {
  const { queue, onCurrent } = useContext(RoomContext);
  const [active, setActive] = useState();

  const onClick = () => {
    if (queue && queue.length > 0) onCurrent(queue[0], 0);
  };

  useEffect(() => {
    setActive(Boolean(queue && queue.length > 0));
  }, [queue]);
  return (
    <Wrapper className={className} onClick={onClick} active={active}>
      <Triangle />
      <Rectangle />
    </Wrapper>
  );
};

export default NextButton;
