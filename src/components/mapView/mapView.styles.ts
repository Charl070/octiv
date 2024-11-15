import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};

`;

export const SearchInput = styled.input`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  width: 200px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  outline: none;
`;

export const PlaceDetails = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  z-index: 10;

  h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #555;
  }
`;

export const MarkerIcon = styled.div`
  width: 12px;
  height: 12px;
  background-color: blue;
  border-radius: 50%;
`;

export const ErrorMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;
