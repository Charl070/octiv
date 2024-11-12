import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 200px;

  &:focus {
    border-color: #333;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;