// MapComponent.tsx
import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { usePlaces } from '../../context/placesContext';
import * as S from './mapView.styles'



const MapComponent: React.FC = () => {
  const { placesData, placesLoading } = usePlaces();
  const theme = useTheme();

  return (
    <S.MapContainer>
      <Map
        initialViewState={{
          latitude: 54.526,
          longitude: 15.2551,
          zoom: 3,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={theme.mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <S.SearchInput placeholder="Search places" />
        {!placesLoading &&
          placesData?.data.map((place: any) => (
            <Marker key={place.id} latitude={place?.coordinates?.lat} longitude={place?.coordinates?.lon}>
              <MarkerIcon />
            </Marker>
          ))}
      </Map>
    </S.MapContainer>
  );
};

const MarkerIcon = styled.div`
  width: 12px;
  height: 12px;
  background-color: blue;
  border-radius: 50%;
`;

export default MapComponent;
