import React from 'react'
import { fetchTVSeries } from '../api'
import Layout from '../partials/Layout'

interface TvSeriesProps {} 

const TvSeries:React.FC<TvSeriesProps> = () => <Layout dataFunction={fetchTVSeries} /> 

export default TvSeries