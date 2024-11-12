import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledMarker = styled.div<{ category: string }>`
  font-size: 24px;
  cursor: pointer;

  ${({ category }) =>
    category === 'food'
      ? 'color: #ff6347;' // Example: red color for food category
      : category === 'service_station'
      ? 'color: #4682b4;' // Example: blue color for service stations
      : 'color: #32cd32;'} // Example: green color for other categories
`;
