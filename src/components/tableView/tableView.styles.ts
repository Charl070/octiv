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


export const ErrorMessage = styled.div`
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const ReloadButton = styled.button`
  background-color: #ff9800;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e68900;
  }
`;
