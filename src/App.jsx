import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BookForm from './components/BookForm/BookForm';
import Filter from './components/Filter/Filter';
import BookList from './components/BookList/BookList';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
  background-color: #1a2a3a; /* Dark blue background */
  min-height: 100vh;
  color: #fff; /* White text */
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Main = styled.main`
  background-color: #fff; /* White background for the main content */
  color: #000; /* Black text for the main content */
  padding: 20px;
  border-radius: 8px;
`;

const ToggleButton = styled.button`
  background-color: #007bff; /* Blue button */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the dialog is on top */
`;

const Dialog = styled.div`
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const DialogTitle = styled.h2`
  margin-top: 0;
`;

const DialogActions = styled.div`
  text-align: right;
`;

const CloseButton = styled.button`
  background-color: #dc3545; /* Red button */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333; /* Darker red on hover */
  }
`;

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Container>
      <Header>
        <Title>Book App</Title>
        <ToggleButton onClick={handleToggleForm}>
          {showForm ? 'Cancel' : 'Add Book'}
        </ToggleButton>
      </Header>
      <Main>
        {showForm && ReactDOM.createPortal(
          <DialogOverlay>
            <Dialog>
              <DialogTitle>Add a New Book</DialogTitle>
              <BookForm />
              <DialogActions>
                <CloseButton onClick={handleCloseForm}>Cancel</CloseButton>
              </DialogActions>
            </Dialog>
          </DialogOverlay>,
          document.body
        )}
        <Filter />
        <BookList />
      </Main>
    </Container>
  );
}

export default App;
