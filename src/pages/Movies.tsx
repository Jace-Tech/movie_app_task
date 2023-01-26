import React from 'react'
import { fetchMoviesTv } from '../api'
import Layout from '../partials/Layout'

interface MoviesProps {} 

const Movies:React.FC<MoviesProps> = () => <Layout dataFunction={fetchMoviesTv} /> 

export default Movies