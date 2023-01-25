import React, { createContext, useContext, useState } from "react";
import { MovieCardProps } from "../@types/common";

interface MovieContextProps {
  setSingleMovie: (state: MovieCardProps) => void;
  singleMovie: MovieCardProps | null;
}
const MovieContext = createContext({} as MovieContextProps); 

interface MovieContextProviderProps {
  children: JSX.Element;
} 

const MovieContextProvider: React.FC<MovieContextProviderProps> = ({ children }) => { 
  const [singleMovie, setSingleMovie] = useState<MovieCardProps | null>(null)
  return ( 
    <MovieContext.Provider value={{ setSingleMovie, singleMovie}}> 
      {children} 
    </MovieContext.Provider> 
  )
}

export default MovieContextProvider
export const useMovieContext = () => useContext(MovieContext);