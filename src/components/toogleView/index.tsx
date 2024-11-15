import React, { useState, Suspense } from 'react';
import MapView from '../mapView';
import * as S from './toggleView.styles';
import LoadingSpinner from '../loader';

const TableView = React.lazy(() => import('../tableView'));

const ToggleView: React.FC = () => {
  const [view, setView] = useState<'map' | 'table'>('map');

  return (
    <S.Container>
      <S.ToggleButtonContainer>
        <S.ToggleButton active={view === 'map'} onClick={() => setView('map')}>
          Maps
        </S.ToggleButton>
        <S.ToggleButton
          active={view === 'table'}
          onClick={() => setView('table')}
        >
          Places
        </S.ToggleButton>
      </S.ToggleButtonContainer>

      {view === 'map' ? (
        <MapView />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <TableView />
        </Suspense>
      )}
    </S.Container>
  );
};

export default ToggleView;
