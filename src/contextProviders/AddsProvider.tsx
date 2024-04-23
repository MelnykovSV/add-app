import { ReactElement, createContext, useState, useCallback, useMemo, useEffect } from 'react';
import axios from 'axios';
import { IAddClientData, IAddDBData } from '../interfaces';

interface IBorderCoordinates {
  minLat: number | null;
  maxLat: number | null;
  minLon: number | null;
  maxLon: number | null;
}

interface IAddsContext {
  adds: any[];
  coordinatesHandler: (coordinatesData: IBorderCoordinates) => void;
  isLoading: boolean;
  currentAdd: {
    id: string;
    name: string;
    description: string;
    address: string;
    price: string;
    image: string;
    lat: number;
    lon: number;
  } | null;
  currentAddHandler: (addId: string | null) => void;
}

interface IAddsProviderProps {
  children: ReactElement | ReactElement[];
}

export const AddsContext = createContext<IAddsContext>({} as IAddsContext);

export function AddsProvider({ children }: IAddsProviderProps) {
  const [adds, setAdds] = useState<IAddDBData[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [currentAdd, setCurrentAdd] = useState<null | IAddClientData>(null);
  const [coordinates, setCoodinates] = useState<IBorderCoordinates>({
    minLat: null,
    maxLat: null,
    minLon: null,
    maxLon: null,
  });

  useEffect(() => {
    const { minLat, maxLat, minLon, maxLon } = coordinates;

    (async () => {
      if (minLat && maxLat && minLon && maxLon) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `https://add-app-backend-w6gc.onrender.com/adds?minLat=${minLat}&maxLat=${maxLat}&minLon=${minLon}&maxLon=${maxLon}`,
          );

          setAdds(response.data.data.adds);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    })();
  }, [coordinates]);

  const currentAddHandler = useCallback(
    (addId: string | null) => {
      const pickedAdd = adds.find(({ _id }) => _id === addId);

      if (!addId || !pickedAdd) {
        setCurrentAdd(null);
        return;
      }

      setCurrentAdd({ ...pickedAdd, id: addId });
    },
    [adds],
  );

  const coordinatesHandler = useCallback((coordinatesData: IBorderCoordinates) => {
    setCoodinates(coordinatesData);
  }, []);

  const contextValue = useMemo(
    () => ({ adds, coordinatesHandler, isLoading, currentAdd, currentAddHandler }),
    [adds, coordinatesHandler, currentAdd, isLoading, currentAddHandler],
  );

  return <AddsContext.Provider value={contextValue}>{children}</AddsContext.Provider>;
}
