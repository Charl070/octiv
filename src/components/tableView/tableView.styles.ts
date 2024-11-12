import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

export const TableHeader = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
`;

export const TableRow = styled.tr`
  cursor: pointer;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
