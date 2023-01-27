import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useMovieContext } from '../contexts/MovieContext'

interface TrailerProps {} 

const Trailer:React.FC<TrailerProps> = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const { movieTrailer } = useMovieContext()

  useEffect(() => {
    if(!movieTrailer)  {
      <Navigate to={"/"} />
    }
  }, [])
  return (
    <Box width={"100%"} height={"100%"}>
      
    </Box>
  )
}

export default Trailer