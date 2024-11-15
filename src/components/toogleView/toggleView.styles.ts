import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  background-color: ${({ active, theme }) =>
    active ? '#007bff' : theme.background};
  color: ${({ active, theme }) => (active ? '#fff' : theme.text)};
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
