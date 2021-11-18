import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  margin: auto;
  padding: 10px;
  text-align: center;
  font-family: Montserrat;
  color: white;
  font-size: 30px;
  /* color: #fecf37; */
`;

const Title = styled.div`
  display: inline-block;
  font-family: MontserratSemibold;
  font-size: 40px;
`;

const Welcome = () => {
  return (
    <Wrapper>
      Sign up to <Title>TeamListener</Title> <br />
      to play music with your friends!
    </Wrapper>
  );
};

export default Welcome;
