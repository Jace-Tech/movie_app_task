import { TRENDING_ENDPOINT, MOVIES_ENDPOINT, TV_ENDPOINT, WIKI_ENDPOINT, CASTS_ENDPOINT, TRAILER_ENDPOINT, SEARCH_ENDPOINT } from './endpoints';


export const fetchTrendingMovies = async () => {
  try {
    const request = await fetch(TRENDING_ENDPOINT)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}

export const fetchMoviesTv = async () => {
  try {
    const request = await fetch(MOVIES_ENDPOINT)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}

export const fetchTVSeries = async () => {
  try {
    const request = await fetch(TV_ENDPOINT)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}

export const fetchMovieWiki = async (id: string) => {
  try {
    const request = await fetch(WIKI_ENDPOINT + id)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}

export const fetchMovieCasts = async (id: string) => {
  try {
    const request = await fetch(CASTS_ENDPOINT + id)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}

export const fetchMovieTrailer = async (id: string) => {
  try {
    const request = await fetch(TRAILER_ENDPOINT + id)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}

export const fetchMovieSearch = async (query: string) => {
  try {
    const request = await fetch(SEARCH_ENDPOINT + query)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}
