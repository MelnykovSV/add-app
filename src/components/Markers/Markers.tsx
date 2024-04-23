import { AdvancedMarker } from '@vis.gl/react-google-maps';

import useAdds from '../../hooks/useAdds';

export default function Markers() {
  const { adds = [] } = useAdds();

  return (
    <>
      {adds.map(({ _id, lat, lon }: any) => (
        <AdvancedMarker key={_id} position={{ lat, lng: lon }} />
      ))}
    </>
  );
}
