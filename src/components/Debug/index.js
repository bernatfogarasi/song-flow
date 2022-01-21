import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Debug = ({ className, json, ...props }) => {
  return (
    <Wrapper className={className} {...props}>
      {json && JSON.stringify(json)}
    </Wrapper>
  );
};

export default Debug;
