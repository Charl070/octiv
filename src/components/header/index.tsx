import React from 'react';
import styled from 'styled-components';
import ThemeToggleButton from '../toggleThemeButton';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => (theme.background === '#ffffff' ? '#555' : '#ddd')};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Places App</Title>
      <ThemeToggleButton />
    </HeaderContainer>
  );
};

export default Header;
