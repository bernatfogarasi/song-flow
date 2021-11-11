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
  font-family: MontserratSemibold;
  font-size: 40px;
  margin-right: 10px;
`;

const Welcome = () => {
  return (
    <Wrapper>
      Welcome to <Title>TeamListener</Title>!
    </Wrapper>
  );
};

export default Welcome;
