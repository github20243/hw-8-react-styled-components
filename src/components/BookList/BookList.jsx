import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
`;

const Title = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #666;
`;

const BookList = () => {
  return (
    <Container>
      <Title>Book List</Title>
      <Message>No books available</Message>
    </Container>
  );
};

export default BookList;
