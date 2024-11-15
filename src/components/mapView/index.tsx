import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePlaces } from '../../context/placesContext';
import LoadingSpinner from '../loader';
import * as S from './mapView.styles';
import axios from 'axios';

const MapComponent: React.FC = () => {
  const { placesData, placesLoading, placesError } = usePlaces();
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const [categoryEmojis, setCategoryEmojis] = useState<any>({});

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

  useEffect(() => {
    const fetchCategoryEmojis = async () => {
      const categories = [
        'food',
        'restaurant',
        'shop',
        'entertainment',
        'park',
        'museum',
      ];
      const emojiMapping: any = {};

      try {
        for (const category of categories) {
          const response = await axios.get(
            `https://emoji-api.com/emojis?search=${category}&access_key=${process.env.REACT_APP_EMOJI_API_KEY}`
          );
          if (response.data && response.data.length > 0) {
            emojiMapping[category] = response.data[1].character;
          }
        }
        setCategoryEmojis(emojiMapping);
      } catch (error) {
        console.error('Error fetching emojis:', error);
      }
    };

    fetchCategoryEmojis();
  }, []);

  const handleMarkerClick = (place: any) => {
    setSelectedPlace(place);
  };

  if (placesLoading) return <LoadingSpinner />;

  if (placesError) return <S.ErrorMessage>{placesError}</S.ErrorMessage>;

  return (
    <S.MapContainer>
      <Map
        initialViewState={viewport}
        style={{ width: '100%', height: '100%' }}
        mapStyle={theme.mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <S.SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
          placeholder="Search places"
        />

        {!placesLoading &&
          filteredPlaces?.map((place: any) => (
            <Marker
              key={place.id}
              latitude={place?.coordinates?.lat}
              longitude={place?.coordinates?.lon}
              onClick={() => handleMarkerClick(place)}
            >
              <div style={{ fontSize: '24px', cursor: 'pointer' }}>
                {categoryEmojis[place.category] || '❓'}
              </div>
            </Marker>
          ))}

        {selectedPlace && (
          <S.PlaceDetails>
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.description}</p>
            <p>{selectedPlace.address}</p>
            <p>Category: {selectedPlace.category}</p>
          </S.PlaceDetails>
        )}
      </Map>
    </S.MapContainer>
  );
};

export default MapComponent;
