import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#007bff' : '#e0e0e0')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#d0d0d0')};
  }
`;
