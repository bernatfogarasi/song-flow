import styled from "styled-components";

const Wrapper = styled.select`
  /* border: 1px solid #333; */
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
`;

const Category = ({ className }) => {
  return (
    <Wrapper className={className}>
      <option value="rooms">Rooms</option>
      <option value="content">Content</option>
    </Wrapper>
  );
};

export default Category;
