import useRoom from "hooks/useRoom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: #1a1a1a;
  border-radius: 4px;
`;

const Title = styled.div`
  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    font-size: 18px;
  }
  @media (min-width: 1400px) {
    font-size: 25px;
  }
`;

const Author = styled.div`
  opacity: 0.6;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (min-width: 800px) and (max-width: 1400px) {
    font-size: 16px;
  }
  @media (min-width: 1400px) {
    font-size: 20px;
  }
`;

const Info = ({ className }) => {
  const { current } = useRoom();

  return (
    <Wrapper className={className}>
      <Title>{current?.title}</Title>
      <Author>{current?.author}</Author>
    </Wrapper>
  );
};

export default Info;
