import { useContext } from 'react';
import { ListingsContext } from '../contextProviders/ListingsProvider';

export default function useListings() {
  const context = useContext(ListingsContext);
  return context;
}
