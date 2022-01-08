import styled, { css } from "styled-components";
import useSelected from "hooks/useSelected";
import Author from "./Author";
import Number from "./Number";
import SiteIcon from "./SiteIcon";
import Spinner from "./Spinner";
import Thumbnail from "./Thumbnail";
import Title from "./Title";
import Time from "./Time";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto auto 1fr auto auto;
  column-gap: 15px;
  height: 40px;
  padding: 8px 15px;
  align-items: center;
  border-top: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
  ${({ over }) =>
    over
      ? css`
          border-color: white;
        `
      : css`
          border-radius: 4px;
        `}
  ${({ selected }) =>
    selected
      ? css`
          background: #d6b11c;
          color: black;
          font-family: MontserratSemibold;
        `
      : css`
          font-family: Montserrat;
        `}
`;

const Content = ({
  className,
  children,
  index,
  content,
  type,
  over,
  onClick = () => {},
  onContextMenu = () => {},
  ...props
}) => {
  const { selected, setSelected } = useSelected(type, content, index);

  const onClickIntercept = (event) => {
    setSelected();
    onClick(event);
  };

  const onContextMenuIntercept = (event) => {
    event.preventDefault();
    setSelected();
    onContextMenu(event);
  };

  return (
    <Wrapper
      className={className}
      selected={selected}
      over={over}
      onClick={onClickIntercept}
      onContextMenu={onContextMenuIntercept}
      {...props}
    >
      {children}
      {content?.id && (
        <>
          <Number>{index}</Number>
          <Thumbnail src={content.thumbnailUrl} alt="" />
          <Title title={content.title} selected={selected}>
            {content.title}
          </Title>
          <Author title={content.author}>{content.author}</Author>
          {type === "current" ? (
            <Spinner />
          ) : (
            <Time duration={content.duration} type="duration" />
          )}
          <SiteIcon site={content.site} />
        </>
      )}
    </Wrapper>
  );
};

export default Content;
