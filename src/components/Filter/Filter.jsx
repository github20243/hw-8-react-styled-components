import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Title = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const FilterControls = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Filter = () => {
  return (
    <Container>
      <Title>Filter</Title>
      <FilterControls>
        <StyledInput type="text" placeholder="Filter by title..." />
        <StyledInput type="text" placeholder="Filter by author..." />
        <label>
          <input type="checkbox" />
          Only Favorite
        </label>
        <Button>Reset Filters</Button>
      </FilterControls>
    </Container>
  );
};

export default Filter;
