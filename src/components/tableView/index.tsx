import React, { useState } from 'react';
import { usePlaces } from '../../context/placesContext';
import PlaceDetailsModal from '../placesDetailModal';
import Pagination from '../pagination';
import * as S from './tableView.styles';
import SearchForm from '../searchForm';
import LoadingSpinner from '../loader';

const TableView: React.FC = () => {
  const { placesData, placesLoading, placesError, updatePagination, searchParams, refetchPlaces } = usePlaces();
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

  const handleSort = (key: string) => {
    const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const sortedPlaces = React.useMemo(() => {
    if (!placesData?.data) return [];
    return [...placesData.data].sort((a, b) => {
      if (!sortConfig) return 0;
      const order = sortConfig.direction === 'asc' ? 1 : -1;
      return a[sortConfig.key].localeCompare(b[sortConfig.key]) * order;
    });
  }, [placesData, sortConfig]);

  if (placesLoading) return <LoadingSpinner />;

  // Render error if there's an issue fetching places data
  if (placesError) {
    return (
      <S.ErrorMessage>
        <p>Error: {placesError}</p>
        <S.ReloadButton onClick={() => refetchPlaces()}>Retry</S.ReloadButton>
      </S.ErrorMessage>
    );
  }

  const handlePageChange = (pageNumber: number) => {
    updatePagination(pageNumber, 10);
  };

  return (
    <S.TableContainer>
      <SearchForm />
      <S.StyledTable>
        <thead>
          <tr>
            <S.TableHeader onClick={() => handleSort('name')}>Name</S.TableHeader>
            <S.TableHeader onClick={() => handleSort('category')}>Category</S.TableHeader>
            <S.TableHeader onClick={() => handleSort('description')}>Description</S.TableHeader>
            <S.TableHeader onClick={() => handleSort('address')}>Address</S.TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedPlaces.length === 0 ? (
            <tr>
              <S.TableCell colSpan={4}>No places found.</S.TableCell>
            </tr>
          ) : (
            sortedPlaces.map((place: any) => (
              <S.TableRow key={place.id} onClick={() => setSelectedPlace(place)}>
                <S.TableCell>{place.name}</S.TableCell>
                <S.TableCell>{place.category}</S.TableCell>
                <S.TableCell>{place.description}</S.TableCell>
                <S.TableCell>{place.address}</S.TableCell>
              </S.TableRow>
            ))
          )}
        </tbody>
      </S.StyledTable>
      
      <S.PaginationWrapper>
        <Pagination
          currentPage={searchParams.page}
          totalItems={placesData?.meta?.totalItems || 0}
          itemsPerPage={10}
          onPageChange={handlePageChange}
        />
      </S.PaginationWrapper>

      {selectedPlace && (
        <PlaceDetailsModal placeId={selectedPlace.id} onClose={() => setSelectedPlace(null)} />
      )}
    </S.TableContainer>
  );
};

export default TableView;
