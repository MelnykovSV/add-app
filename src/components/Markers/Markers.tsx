import { useEffect, useRef, useState } from 'react';
import { useMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import { MarkerClusterer, Marker } from '@googlemaps/markerclusterer';
// import { Marker } from '@googlemaps/markerclusterer';

import useAdds from '../../hooks/useAdds';

export default function Markers() {
  const { adds = [] } = useAdds();
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  console.log('render');

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      }
      const newMarkers = { ...prev };
      delete newMarkers[key];
      return newMarkers;
    });
  };

  return (
    <>
      {adds.map(({ _id, lat, lon }: any) => (
        <AdvancedMarker
          ref={(marker) => setMarkerRef(marker, _id)}
          key={_id}
          position={{ lat, lng: lon }}
        />
      ))}
    </>
  );
}
