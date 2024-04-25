import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useDebounceCallback } from 'usehooks-ts';
import { useListings } from '../../hooks';
import Markers from '../Markers/Markers';
import * as S from './BigMap.styled';

const { VITE_APP_GOOGLE_MAPS_KEY } = process.env;

console.log(process.env);

console.log(VITE_APP_GOOGLE_MAPS_KEY);

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

  const debouncedHandleBoundsChanged = useDebounceCallback(handleBoundsChanged, 300);

  return (
    <S.Wrapper style={{ width: '100%', height: '100%' }}>
      <APIProvider apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''} libraries={['places']} language="en">
        <Map
          style={{ width: '100%', height: '100%' }}
          defaultCenter={{ lat: 50.4, lng: 30.5 }}
          defaultZoom={10}
          gestureHandling="greedy"
          disableDefaultUI
          mapId="big-map"
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

      {VITE_APP_GOOGLE_MAPS_KEY ? null : (
        <S.ErrorMessage>
          Error: Google Maps API key is missing. Please provide an API key.
        </S.ErrorMessage>
      )}
    </S.Wrapper>
  );
}
