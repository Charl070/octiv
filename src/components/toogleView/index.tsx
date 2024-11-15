import React, { useState } from 'react';
import MapView from '../mapView';
import TableView from '../tableView';
import * as S from './toggleView.styles';

const ToggleView: React.FC = () => {
  const [view, setView] = useState<'map' | 'table'>('map');

  return (
    <S.Container>
      <S.ToggleButtonContainer>
        <S.ToggleButton active={view === 'map'} onClick={() => setView('map')}>
          Maps
        </S.ToggleButton>
        <S.ToggleButton active={view === 'table'} onClick={() => setView('table')}>
          Places
        </S.ToggleButton>
      </S.ToggleButtonContainer>
      
      {view === 'map' ? <MapView /> : <TableView />}
    </S.Container>
  );
};

export default ToggleView;
