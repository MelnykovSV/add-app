import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useDebounceCallback } from 'usehooks-ts';
import useAdds from '../../hooks/useAdds';

const { VITE_APP_GOOGLE_MAPS_KEY } = process.env;

export default function BigMap() {
  const { adds, coordinatesHandler } = useAdds();
  const [markers] = useState(adds);

  const handleBoundsChanged = (event: any) => {
    coordinatesHandler({
      minLat: event.detail.bounds.north,
      maxLat: event.detail.bounds.south,
      minLon: event.detail.bounds.west,
      maxLon: event.detail.bounds.east,
    });
  };

  const debouncedHandleBoundsChanged = useDebounceCallback(handleBoundsChanged, 500);

  console.log(markers);

  const clickHandler = (event: any) => {
    console.log('Click:', event.detail.latLng);
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <APIProvider apiKey={VITE_APP_GOOGLE_MAPS_KEY || ''}>
        <Map
          style={{ width: '100%', height: '700px' }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI
          onBoundsChanged={(e) => {
            debouncedHandleBoundsChanged(e);
          }}
          onClick={clickHandler}
        />
      </APIProvider>
    </div>
  );
}
