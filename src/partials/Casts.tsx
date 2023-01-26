import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CardSkeleton from '../components/CardSkeleton'
import CastCard from '../components/CastCard'
import Footer from '../components/Footer'
import { useMovieContext } from '../contexts/MovieContext'
import usePagination from '../hooks/usePagination'
import { WHITE } from '../utils/colors'

interface CastsProps { }

const Casts: React.FC<CastsProps> = () => {
  const { movieCasts } = useMovieContext()
  const { totalPages, currentPage, pageData, setCurrentPage, setDataArr } = usePagination(movieCasts?.actors || [], 12)

  const castSkeletons = new Array(12).fill("card-skeleton")

  useEffect(() => {
    if(!movieCasts) return
    setDataArr(movieCasts?.actors)
  }, [movieCasts])

  return (
    <Box mt={5}>
      <Container>
        <Typography color={WHITE} fontWeight={400} mb={4} fontSize={"2rem"}>Casts</Typography>
        <Grid container spacing={4}>
          { !!pageData ? pageData.map((cast) => (
            <CastCard {...cast} key={cast?.id} />
          )): castSkeletons.map((item, index) => (
            <CardSkeleton key={`${item}-${index}`} />
          )) }
        </Grid>
      </Container>
      <Footer
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Box>
  )
}

export default Casts