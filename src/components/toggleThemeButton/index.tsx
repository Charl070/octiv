import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.text};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

export default ThemeToggleButton;
