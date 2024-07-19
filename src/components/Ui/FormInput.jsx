import React from 'react';
import styled from 'styled-components';

const FormLabel = styled.div`
  color: #000000;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledTextField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;

  &:focus {
    border-color: black;
    outline: none;
  }

  &.error {
    border-color: red;
  }
`;

const FormInput = ({ id, labelText, placeholder = '', type = 'text', error = false }) => {
  const effectivePlaceholder = placeholder !== "" && placeholder ? placeholder : "...";

  return (
    <FormLabel>
      <StyledInputLabel htmlFor={id}>{labelText}</StyledInputLabel>
      <StyledTextField
        placeholder={effectivePlaceholder}
        type={type}
        id={id}
        className={error ? 'error' : ''}
      />
    </FormLabel>
  );
};

export default FormInput;
