import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const TableHeader = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const TableRow = styled.tr`
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.background === '#ffffff' ? '#f9f9f9' : '#2a2a2a'};
  }

  &:hover {
    background-color: ${({ theme }) => theme.background === '#ffffff' ? '#eaeaea' : '#3a3a3a'};
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  color: ${({ theme }) => theme.text};
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
