import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 30px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
  width: fit-content;
  margin: auto;
  padding: 10px;
  text-align: center;
  font-family: Montserrat;
  color: white;
  /* color: #fecf37; */
`;

const Title = styled.div`
  display: inline-block;
  font-family: MontserratSemibold;
  font-size: 40px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const Welcome = () => {
  return (
    <Wrapper>
      Sign up to <Title>TeamListener</Title> <br />
      to play music in groups!
    </Wrapper>
  );
};

export default Welcome;
