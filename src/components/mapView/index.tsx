import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePlaces } from '../../context/placesContext';
import LoadingSpinner from '../loader';
import * as S from './mapView.styles';

const MapComponent: React.FC = () => {
  const { placesData, placesLoading, placesError } = usePlaces();
  const theme = useTheme();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);

  const filteredPlaces = placesData?.data.filter((place: any) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const place = filteredPlaces?.[0];
    if (place) {
      setSelectedPlace(place);
    }
  };

  useEffect(() => {
    if (selectedPlace) {
      setViewport({
        latitude: selectedPlace?.coordinates?.lat,
        longitude: selectedPlace?.coordinates?.lon,
        zoom: 12, 
      });
    }
  }, [selectedPlace]);


  const [viewport, setViewport] = useState<any>({
    latitude: 54.526,
    longitude: 15.2551,
    zoom: 3,
  });

  if (placesLoading) return <LoadingSpinner/>;

  if (placesError) return <S.ErrorMessage>{placesError}</S.ErrorMessage>;

  return (
    <S.MapContainer>
      <Map
        initialViewState={viewport}
        style={{ width: '100%', height: '100%' }}
        mapStyle={theme.mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        //onViewportChange={(newViewport) => setViewport(newViewport)} // Allow manual interaction with the map
      >
        {/* Search Form */}
        <S.SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)} // Trigger search on Enter
          placeholder="Search places"
        />

        {/* Display markers for filtered places */}
        {!placesLoading &&
          filteredPlaces?.map((place: any) => (
            <Marker
              key={place.id}
              latitude={place?.coordinates?.lat}
              longitude={place?.coordinates?.lon}
            >
              <S.MarkerIcon />
            </Marker>
          ))}

        {/* Optionally, show a modal or details for the selected place */}
        {selectedPlace && (
          <S.PlaceDetails>
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.description}</p>
            <p>{selectedPlace.address}</p>
          </S.PlaceDetails>
        )}
      </Map>
    </S.MapContainer>
  );
};

export default MapComponent;
