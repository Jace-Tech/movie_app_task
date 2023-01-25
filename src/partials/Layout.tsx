import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MovieCardProps } from '../@types/common'
import ErrorPage from '../components/ErrorPage'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import MovieCardSkeleton from '../components/MovieCardSkeleton'
import { useMovieContext } from '../contexts/MovieContext'
import useFetch from '../hooks/useFetch'
import usePagination from '../hooks/usePagination'

interface LayoutProps {
  dataFunction: () => Promise<any>
} 

const Layout:React.FC<LayoutProps> = ({ dataFunction }) => {
  const [trendings, setTrendings] = useState<MovieCardProps[] | any[]>([])
  const [error, setError] = useState<boolean>(false)
  
  const { data, isFetching } = useFetch(dataFunction as any)
  const { pageData, setCurrentPage, currentPage, setDataArr, totalPages } = usePagination(trendings, 12)
  const { setSingleMovie } = useMovieContext()
  const navigate = useNavigate()

  const Skeletons = new Array(12).fill("*");


  const handleClick = (item: MovieCardProps) => {
    setSingleMovie(item)
    navigate("/single")
  }

  useEffect(() => {
    if (!data) return;
    if (("success" in data && !data.success) || data?.errorMessage) {
      setError(true)
      return
    }
    setTrendings(data?.items)
  }, [data])

  useEffect(() => {
    if(!trendings) return
    setDataArr(trendings)
  }, [trendings])

  if(error) return (
    <ErrorPage />
  )

  return (
    <Box py={4} flex={1}>
      <Container maxWidth={"lg"}>
        <Grid container flex={1} spacing={3}>
          {
            isFetching ?
              Skeletons?.map((_, index) => <MovieCardSkeleton index={index} key={index} />) :
              pageData?.map((item, index) => <MovieCard handleClick={() => handleClick(item)}  index={index} {...item} key={item?.id} />)
          }
        </Grid>
        <Footer 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage} 
        />
      </Container>
    </Box>
  )
}

export default Layout