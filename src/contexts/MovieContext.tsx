import React, { createContext, useContext, useEffect, useState } from "react";
import { MovieCardProps, MovieCastType, TrailerType, TrailerTypeYT } from "../@types/common";
import { fetchMovieCasts, fetchMovieTrailer, fetchMovieWiki } from "../api";

interface MovieContextProps {
  setSingleMovie: (state: MovieCardProps) => void;
  singleMovie: MovieCardProps | null;
  movieDetails: string;
  movieDetailsFull: string;
  movieCasts: MovieCastType | null;
  error: boolean;
  movieTrailer: TrailerType  | null;
  // movieTrailer: TrailerTypeYT | null;
}
const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProviderProps {
  children: JSX.Element;
}

const MovieContextProvider: React.FC<MovieContextProviderProps> = ({ children }) => {
  const [singleMovie, setSingleMovie] = useState<MovieCardProps | null>(null)
  const [movieDetails, setMovieDetails] = useState<string>("")
  const [movieDetailsFull, setMovieDetailsFull] = useState<string>("")
  const [movieCasts, setMovieCasts] = useState<MovieCastType | null>(null)
  // const [movieTrailer, setMovieTrailer] = useState<TrailerTypeYT | null>(null)
  const [movieTrailer, setMovieTrailer] = useState<TrailerType | null>(null)
  const [error, setError] = useState<boolean>(false)

  const handleGetDetails = async () => {
    const data = await fetchMovieWiki(singleMovie?.id!)
    if (!data) return;
    if (("success" in data && !data.success) || data?.errorMessage) {
      setError(true)
      return
    }
    setMovieDetails(data?.plotShort?.plainText)
    setMovieDetailsFull(data?.plotFull?.plainText)
  }

  const handleGetCasts = async () => {
    const data = await fetchMovieCasts(singleMovie?.id!)
    if (!data) return;
    if (("success" in data && !data.success) || data?.errorMessage) {
      setError(true)
      return
    }
    setMovieCasts(data)
  }

  const handleGetTrailer = async () => {
    const data = await fetchMovieTrailer(singleMovie?.id!)
    if (!data) return;
    if (("success" in data && !data.success) || data?.errorMessage) {
      setError(true)
      return
    }
    setMovieTrailer(data)
  }

  const handleGetTrailerYT = async () => {
    const data = await fetchMovieTrailer(singleMovie?.id!)
    if (!data) return;
    if (("success" in data && !data.success) || data?.errorMessage) {
      setError(true)
      return
    }
    setMovieTrailer(data)
  }

  useEffect(() => {
    if (!singleMovie) return
    handleGetDetails()
    handleGetCasts()
    handleGetTrailer()
    // handleGetTrailerYT()
  }, [singleMovie])

  return (
    <MovieContext.Provider value={{ setSingleMovie, movieTrailer, singleMovie, movieDetails, movieCasts, error, movieDetailsFull }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
export const useMovieContext = () => useContext(MovieContext);