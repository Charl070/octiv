import React from 'react';
import * as S from './paginatio.styles'

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <S.PageButton key={i} onClick={() => onPageChange(i)} active={i === currentPage}>
          {i}
        </S.PageButton>
      );
    }

    return pages;
  };

  return (
    <S.PaginationContainer>
      <S.PageButton onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        &laquo;
      </S.PageButton>
      <S.PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lsaquo;
      </S.PageButton>

      {renderPageNumbers()}

      <S.PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &rsaquo;
      </S.PageButton>
      <S.PageButton onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        &raquo;
      </S.PageButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
