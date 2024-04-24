import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useDebounceCallback } from 'usehooks-ts';
import { useListings } from '../../hooks';
import Markers from '../Markers/Markers';
import * as S from './BigMap.styled';

const { VITE_APP_GOOGLE_MAPS_KEY } = process.env;

export default function BigMap() {
  const { coordinatesHandler, currentListingHandler } = useListings();

  const handleBoundsChanged = (event: MapCameraChangedEvent) => {
    if (coordinatesHandler) {
      coordinatesHandler({
        minLat: event.detail.bounds.south,
        maxLat: event.detail.bounds.north,
        minLon: event.detail.bounds.west,
        maxLon: event.detail.bounds.east,
      });
    }
  };

  const debouncedHandleBoundsChanged = useDebounceCallback(handleBoundsChanged, 500);

  return (
    <S.Wrapper style={{ width: '100%', height: '100%' }}>
      <APIProvider apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''} libraries={['places']} language="en">
        <Map
          style={{ width: '100%', height: '100%' }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI
          mapId="<Your custom MapId here>"
          onBoundsChanged={(e) => {
            debouncedHandleBoundsChanged(e);
          }}
          onClick={() => {
            currentListingHandler(null);
          }}
        >
          <Markers />
        </Map>
      </APIProvider>
    </S.Wrapper>
  );
}
