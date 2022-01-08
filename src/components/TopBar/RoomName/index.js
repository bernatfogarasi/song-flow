import useRoom from "hooks/useRoom";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 25px;
`;

const RoomName = ({ className }) => {
  const { name } = useRoom();
  return <Wrapper className={className}>{name}</Wrapper>;
};

export default RoomName;
