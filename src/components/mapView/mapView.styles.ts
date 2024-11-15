import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
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