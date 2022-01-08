import styled from "styled-components";
import Content from "components/Content";
import useRoom from "hooks/useRoom";

const Wrapper = styled(Content)``;

const Result = ({ className, content }) => {
  const { setDragElement } = useRoom();

  const onDragStart = (event) => {
    setDragElement(event.currentTarget);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify({ ...content }));
  };

  const onDragEnd = () => {
    setDragElement(undefined);
  };

  return (
    <Wrapper
      className={className}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      content={content}
      type={"result"}
    ></Wrapper>
  );
};

export default Result;
