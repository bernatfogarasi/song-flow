import styled from "styled-components";

const Wrapper = styled.div`
  height: 5px;
  background: #333;
  border-radius: 2px;
  width: 400px;
  margin-top: 20px;
`;

const Fill = styled.div`
  height: 5px;
  background: #eee;
  border-radius: 8px;
  animation: load 300s linear infinite;
  @keyframes load {
    0% {
      width: 8px;
    }
    100% {
      width: 400px;
    }
  }
`;

const ProgressBar = () => {
  return (
    <Wrapper>
      <Fill />
    </Wrapper>
  );
};

export default ProgressBar;
