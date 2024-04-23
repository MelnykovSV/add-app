import { Pin, AdvancedMarker } from '@vis.gl/react-google-maps';

import useAdds from '../../hooks/useAdds';

export default function Markers() {
  const { adds, currentAdd, currentAddHandler } = useAdds();

  return (
    <>
      {adds.map(({ _id, lat, lon }: any) => (
        <AdvancedMarker
          key={_id}
          position={{ lat, lng: lon }}
          onClick={() => {
            currentAddHandler(_id);
          }}
        >
          <Pin
            background={_id === currentAdd?.id ? '#198658' : '#6851cd'}
            glyphColor="#000"
            borderColor="#000"
          />
        </AdvancedMarker>
      ))}
    </>
  );
}
