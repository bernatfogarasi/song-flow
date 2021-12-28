import { RoomContext } from "context";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #f3ca20;
  font-size: 25px;
`;

const RoomName = ({ className, children }) => {
  const { name } = useContext(RoomContext);
  return <Wrapper className={className}>{name}</Wrapper>;
};

export default RoomName;
