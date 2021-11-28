import styled from "styled-components";

const Wrapper = styled.div`
  border: 8px solid;
  border-color: white transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderCircle = ({ className }) => {
  return <Wrapper className={className}></Wrapper>;
};

export default LoaderCircle;
