import React, { useEffect, useState } from 'react';
import { fetchPlaceById } from '../../services/api/places';
import * as S from './placesDetailModal.styles';

const PlaceDetailsModal: React.FC<{ placeId: string; onClose: () => void }> = ({ placeId, onClose }) => {
  const [place, setPlace] = useState<any>(null);

  useEffect(() => {
    fetchPlaceById(placeId).then(setPlace);
  }, [placeId]);

  if (!place) return <div>Loading...</div>;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <S.Title>{place.name}</S.Title>
        <S.Description>{place.description}</S.Description>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default PlaceDetailsModal;
