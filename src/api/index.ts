import { TRENDING_ENDPOINT } from './endpoints';


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
    const request = await fetch(TRENDING_ENDPOINT)
    const result = await request.json()
    return result
  } catch (err: any) {
    return { success: false, message: err.message }
  }
}