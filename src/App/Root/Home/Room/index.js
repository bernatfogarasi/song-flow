import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 300px;
  border: 1px solid#333;
  margin: 10px;
  border-radius: 4px;
`;

const Title = styled.div`
  letter-spacing: 0.1em;
  font-family: Montserrat;
`;

const Rank = styled.div`
  color: ${({ color }) => color};
`;

const Star = styled(Rank)``;

const ranks = {
  admin: { color: "yellow", text: "★", element: Star },
  member: { color: "grey", text: "", element: Star },
};

const Room = ({ name, rank }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      {/* <Rank color={ranks[rank].color}>{ranks[rank].text}</Rank> */}
      {/* {ranks[rank].element} */}
      <Star />
    </Wrapper>
  );
};

export default Room;
