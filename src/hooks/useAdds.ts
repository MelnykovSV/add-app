import { useContext } from 'react';
import { AddsContext } from '../contextProviders/AddsProvider';

export default function useAdds() {
  const context = useContext(AddsContext);
  return context;
}
