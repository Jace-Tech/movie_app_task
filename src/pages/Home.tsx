import React from 'react'
import Layout from '../partials/Layout'
import { fetchTrendingMovies } from '../api'


interface HomeProps { }
const Home: React.FC<HomeProps> = () =>  <Layout dataFunction={fetchTrendingMovies}/> 

export default Home