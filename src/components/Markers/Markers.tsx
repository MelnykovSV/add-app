import { Pin, AdvancedMarker } from '@vis.gl/react-google-maps';

import { useListings } from '../../hooks';
import { IListingDBData } from '../../interfaces';

export default function Markers() {
  const { listings, currentListing, currentListingHandler } = useListings();

  return (
    <>
      {listings.map(({ _id, lat, lon }: IListingDBData) => (
        <AdvancedMarker
          key={_id}
          position={{ lat, lng: lon }}
          onClick={() => {
            currentListingHandler(_id);
          }}
        >
          <Pin
            background={_id === currentListing?.id ? '#198658' : '#6851cd'}
            glyphColor="#000"
            borderColor="#000"
          />
        </AdvancedMarker>
      ))}
    </>
  );
}
