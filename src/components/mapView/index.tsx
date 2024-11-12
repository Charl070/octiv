// src/components/MapView.tsx
import React, { useState, useRef, useEffect } from 'react';
import Map, { Marker, MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { usePlaces } from '../../context/placesContext';
import * as S from './mapView.styles';

const MapView: React.FC = () => {
  const { placesData } = usePlaces();
  const [isDark, setIsDark] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
  });

  const mapRef = useRef<MapRef | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const geocoder = new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN as string,
        //mapboxgl: mapRef.current.getMap(),
        marker: false,
        placeholder: 'Search for places',
      });
      mapRef.current.getMap().addControl(geocoder, 'top-left');
    }
  }, []);

  // Function to handle search input
  const handleSearch = async (query: string) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Extract and set search results to filter table data
      const results = data.features.map((feature: any) => ({
        id: feature.id,
        name: feature.text,
        coordinates: feature.geometry.coordinates,
      }));
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <S.MapContainer>
      {/* Search Input */}
      
        <input
          type="text"
          placeholder="Search for locations..."
          onChange={(e) => handleSearch(e.target.value)}
        />


      {/* Map Component */}
      <Map
        ref={mapRef}
        initialViewState={viewport}
        style={{ width: '100%', height: '100%' }}
        mapStyle={isDark ? 'mapbox://styles/charl070/cm3ddw151002001pf1k99e83s' : 'mapbox://styles/charl070/cm3ddw151002001pf1k99e83s'}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onMove={(evt) => setViewport(evt.viewState)}
      >
        {placesData?.data?.map((place: any) => (
          <Marker
            key={place.id}
            longitude={place.coordinates.lon}
            latitude={place.coordinates.lat}
          >
            <S.StyledMarker category={place.category}>
              {place.category === 'food' ? '🍔' : place.category === 'service_station' ? '⛽' : '🏨'}
            </S.StyledMarker>
          </Marker>
        ))}
      </Map>
    </S.MapContainer>
  );
};

export default MapView;
