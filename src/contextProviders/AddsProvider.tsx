import { ReactElement, createContext, useState, useCallback, useMemo, useEffect } from 'react';
import axios from 'axios';

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
  currentAdd: string | null;
  currentAddHandler: (add: string | null) => void;
}

interface IAddsProviderProps {
  children: ReactElement | ReactElement[];
}

export const AddsContext = createContext<IAddsContext>({} as IAddsContext);

export function AddsProvider({ children }: IAddsProviderProps) {
  const [adds, setAdds] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [currentAdd, setCurrentAdd] = useState<null | string>(null);
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

  const currentAddHandler = useCallback((add: string | null) => {
    if (add === null || add) {
      setCurrentAdd(add);
    }
  }, []);

  const coordinatesHandler = useCallback((coordinatesData: IBorderCoordinates) => {
    setCoodinates(coordinatesData);
  }, []);

  const contextValue = useMemo(
    () => ({ adds, coordinatesHandler, isLoading, currentAdd, currentAddHandler }),
    [adds, coordinatesHandler, currentAdd, isLoading, currentAddHandler],
  );

  return <AddsContext.Provider value={contextValue}>{children}</AddsContext.Provider>;
}
