import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import { MILK, WHITE } from '../utils/colors'

interface MoviePlotProps { }

const MoviePlot: React.FC<MoviePlotProps> = () => {
  const { singleMovie, movieDetailsFull } = useMovieContext()
  return (
    <Box flex={1} py={4}>
      <Container maxWidth={"md"}>
        <Stack spacing={4}>
          <Typography color={WHITE} fontWeight={600} fontSize={"1.8rem"}>{singleMovie?.fullTitle}</Typography>

          {/* Short movieDetails */}
          <Stack spacing={3}>
            {movieDetailsFull.split("\n").map((detail, index) => (
              <Typography textAlign={"justify"} key={`${index}-${detail.slice(0, 9)}`} color={MILK} whiteSpace={"pre-wrap"} fontWeight={300} fontSize={"1rem"}>
                { detail }
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default MoviePlot