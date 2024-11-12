import React, { useState } from 'react';
import { usePlaces } from '../../context/placesContext';
import PlaceDetailsModal from '../placesDetailModal';
import Pagination from '../pagination'; 
import * as S from './tableView.styles';
import SearchForm from '../searchForm';
import LoadingSpinner from '../loader';

const TableView: React.FC = () => {
    const { placesData, placesLoading, updatePagination, searchParams } = usePlaces();
    const [selectedPlace, setSelectedPlace] = useState<any>(null);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

    const itemsPerPage = 10;

    const handleSort = (key: string) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedPlaces = React.useMemo(() => {
        if (!placesData?.data) return [];
        let sortedData = [...placesData?.data];

        if (sortConfig) {
            sortedData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }

        return sortedData;
    }, [placesData, sortConfig]);

    const handlePageChange = (pageNumber: number) => {
        updatePagination(pageNumber, itemsPerPage);
    };

    if (placesLoading) return <LoadingSpinner/>;

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
            {sortedPlaces.map((place: any) => (
              <S.TableRow key={place.id} onClick={() => setSelectedPlace(place)}>
                <S.TableCell>{place.name}</S.TableCell>
                <S.TableCell>{place.category}</S.TableCell>
                <S.TableCell>{place.description}</S.TableCell>
                <S.TableCell>{place.address}</S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.StyledTable>
        
        <S.PaginationWrapper>
            <Pagination
          currentPage={searchParams.page}
          totalItems={placesData?.meta?.totalItems || 0}
          itemsPerPage={itemsPerPage}
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
