import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPlaces } from '../services/api/places';

interface SearchParams {
  page: number;
  limit: number;
  search?: string;
  category?: string;
  [key: string]: any; 
}

interface PlacesContextProps {
  searchParams: SearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
  placesData: any;
  placesLoading: boolean;
  refetchPlaces: () => void;
  updatePagination: (page: number, limit: number) => void;
}

const PlacesContext = createContext<PlacesContextProps | undefined>(undefined);

export const PlacesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ page: 1, limit: 10 });

  const { data: placesData, refetch: refetchPlaces, isLoading: placesLoading } = useQuery({
    queryKey: ['places', searchParams],
    queryFn: () => fetchPlaces(searchParams),
  });

  const updatePagination = (page: number, limit: number) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      page,
      limit,
    }));
  };

  return (
    <PlacesContext.Provider value={{ searchParams, setSearchParams, placesData, placesLoading, refetchPlaces, updatePagination }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = () => {
  const context = useContext(PlacesContext);
  if (!context) {
    throw new Error("usePlaces must be used within a PlacesProvider");
  }
  return context;
};
