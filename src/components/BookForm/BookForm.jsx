import styled from 'styled-components';
import FormInput from '../Ui/FormInput';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: #007bff; /* Blue color */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const BookForm = () => {
  return (
    <Container>
      <FormInput labelText="Title" id="title" />
      <FormInput labelText="Author" id="author" />
      <ButtonContainer>
        <Button>Add Book</Button>
        <Button>Add Random</Button>
        <Button>Add Random via API</Button>
      </ButtonContainer>
    </Container>
  );
};

export default BookForm;
