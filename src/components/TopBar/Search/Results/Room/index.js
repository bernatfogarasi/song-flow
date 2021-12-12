import styled from "styled-components";
import Type from "../Type";
import LinkPlain from "components/LinkPlain";

const Wrapper = styled(LinkPlain)`
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  :hover {
    transform: scale(1.05);
    background: #222;
  }
  transition: 0.2s;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 4px;
`;

const Room = ({ name, url }) => {
  return (
    <Wrapper to={url}>
      <Type>Room</Type> {name}
    </Wrapper>
  );
};

export default Room;
