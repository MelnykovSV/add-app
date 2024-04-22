import { ReactElement, createContext, useState, useCallback, useMemo } from 'react';

interface IBorderCoordinates {
  minLan: number;
  maxLan: number;
  minLon: number;
  maxLon: number;
}

interface IAddsProviderProps {
  children: ReactElement | ReactElement[];
}

export const AddsContext = createContext<any>(null);

export function AddsProvider({ children }: IAddsProviderProps) {
  const [adds] = useState([]);

  const [, setCoodinates] = useState<IBorderCoordinates>({
    minLan: 0,
    maxLan: 40,
    minLon: 0,
    maxLon: 40,
  });

  const coordinatesHandler = useCallback((coordinatesData: IBorderCoordinates) => {
    setCoodinates(coordinatesData);
  }, []);

  const contextValue = useMemo(() => ({ adds, coordinatesHandler }), [adds, coordinatesHandler]);

  return <AddsContext.Provider value={contextValue}>{children}</AddsContext.Provider>;
}
