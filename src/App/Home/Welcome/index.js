import styled from "styled-components";

const Wrapper = styled.div`
  font-family: Montserrat;
  color: white;
  font-size: 30px;
  padding: 10px;
  /* color: #fecf37; */
  text-align: center;
`;

const Title = styled.div`
  display: inline-block;
  font-family: Gluten;
  font-size: 40px;
`;

const Welcome = () => {
  return (
    <Wrapper>
      Welcome to <Title>Songflow</Title>!
    </Wrapper>
  );
};

export default Welcome;
