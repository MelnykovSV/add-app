import { ReactElement, createContext, useState, useCallback, useMemo, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import getErrorMessage from '../helpers/getErrorMessage';
import { IListingClientData, IListingDBData } from '../interfaces';

interface IBorderCoordinates {
  minLat: number | null;
  maxLat: number | null;
  minLon: number | null;
  maxLon: number | null;
}

interface IListingsContext {
  listings: any[];
  coordinatesHandler: (coordinatesData: IBorderCoordinates) => void;
  isLoading: boolean;
  currentListing: {
    id: string;
    name: string;
    description: string;
    address: string;
    price: number;
    image: string;
    lat: number;
    lon: number;
  } | null;
  currentListingHandler: (listingId: string | null) => void;
  refreshListingsData: () => void;
  searchQueryHandler: (query: string) => void;
}

interface IListingsProviderProps {
  children: ReactElement | ReactElement[];
}

export const ListingsContext = createContext<IListingsContext>({} as IListingsContext);

export function ListingsProvider({ children }: IListingsProviderProps) {
  const [listings, setListings] = useState<IListingDBData[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [currentListing, setCurrentListing] = useState<null | IListingClientData>(null);
  const [coordinates, setCoodinates] = useState<IBorderCoordinates>({
    minLat: null,
    maxLat: null,
    minLon: null,
    maxLon: null,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const searchQueryHandler = (query: string) => {
    setSearchQuery(query);
  };

  const refreshListingsData = useCallback(async () => {
    const { minLat, maxLat, minLon, maxLon } = coordinates;

    if (minLat && maxLat && minLon && maxLon) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://listings-app-backend.onrender.com/listings?minLat=${minLat}&maxLat=${maxLat}&minLon=${minLon}&maxLon=${maxLon}${
            searchQuery ? `&searchQuery=${searchQuery}` : ''
          }`,
        );

        setListings(response.data.data.listings);
        setIsLoading(false);
      } catch (error) {
        toast.error(getErrorMessage(error));
        setIsLoading(false);
      }
    }
  }, [coordinates, searchQuery]);

  useEffect(() => {
    const { minLat, maxLat, minLon, maxLon } = coordinates;

    (async () => {
      if (minLat && maxLat && minLon && maxLon) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `https://listings-app-backend.onrender.com/listings?minLat=${minLat}&maxLat=${maxLat}&minLon=${minLon}&maxLon=${maxLon}${
              searchQuery ? `&searchQuery=${searchQuery}` : ''
            }`,
          );

          setListings(response.data.data.listings);
          setIsLoading(false);
        } catch (error) {
          toast.error(getErrorMessage(error));
          setIsLoading(false);
        }
      }
    })();
  }, [coordinates, searchQuery]);

  const currentListingHandler = useCallback(
    (listingId: string | null) => {
      const pickedListing = listings.find(({ _id }) => _id === listingId);

      if (!listingId || !pickedListing) {
        setCurrentListing(null);
        return;
      }

      setCurrentListing({ ...pickedListing, id: listingId });
    },
    [listings],
  );

  const coordinatesHandler = useCallback((coordinatesData: IBorderCoordinates) => {
    setCoodinates(coordinatesData);
  }, []);

  const contextValue = useMemo(
    () => ({
      listings,
      coordinatesHandler,
      isLoading,
      currentListing,
      currentListingHandler,
      refreshListingsData,
      searchQueryHandler,
    }),
    [
      listings,
      coordinatesHandler,
      isLoading,
      currentListing,
      currentListingHandler,
      refreshListingsData,
    ],
  );

  return <ListingsContext.Provider value={contextValue}>{children}</ListingsContext.Provider>;
}
