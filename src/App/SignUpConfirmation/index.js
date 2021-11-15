import styled from "styled-components";
import TopBar from "../../components/TopBar";

const Wrapper = styled.div`
  padding-top: 20vh;
`;

const CheckMark = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  width: 50px;
  height: 50px;
  margin-right: 50px;
  background: #f3ca20;
  position: relative;
`;

const Line = styled.div`
  background: black;
  position: absolute;
`;

const LineLeft = styled(Line)`
  width: 18px;
  height: 6px;
  left: 8px;
  top: 29px;
  transform: rotate(40deg);
`;

const LineRight = styled(Line)`
  width: 30px;
  height: 6px;
  left: 15px;
  top: 23px;
  transform: rotate(-50deg);
`;

const Text = styled.div`
  /* border: 1px solid #333; */
  border-radius: 4px;
  padding: 10px;
  flex-shrink: 100;
`;

const Title = styled.div`
  font-size: 40px;
  margin: auto;
  margin-bottom: 20px;
  width: fit-content;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
`;

const SignUpConfirmation = () => {
  return (
    <Wrapper>
      <TopBar logo />
      <Title>Confirm your email address</Title>
      <Message>
        <CheckMark>
          <LineLeft />
          <LineRight />
        </CheckMark>
        <Text>
          <p>
            We have sent an email with a confirmation link to your email
            address.
          </p>
          <p>
            In order to complete the sign-up process, please click the
            confirmation link.
          </p>
        </Text>
      </Message>
    </Wrapper>
  );
};

export default SignUpConfirmation;
