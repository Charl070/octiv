import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#007bff' : '#e0e0e0')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  border: none;
  padding: 0.5rem 0.75rem;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#007bff' : '#c0c0c0')};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;