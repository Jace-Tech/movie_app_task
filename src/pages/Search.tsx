import { Box, Container, Grid, Input, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { SearchResultType, SingleSearchType } from '../@types/common'
import { fetchMovieSearch } from '../api'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import MovieCardSkeleton from '../components/MovieCardSkeleton'
import { useMovieContext } from '../contexts/MovieContext'
import useFetch from '../hooks/useFetch'
import usePagination from '../hooks/usePagination'
import ErrorPage from '../partials/ErrorPage'
import { GRAY, MILK, WHITE } from '../utils/colors'

interface SearchProps { }

const Search: React.FC<SearchProps> = () => {
  const [timeoutHandler, setTimeoutHandler] = useState<number | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const { setSingleMovie } = useMovieContext()
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<SingleSearchType[]>([])
  const inputRef = useRef<any>()
  const { currentPage, pageData, setCurrentPage, setDataArr, totalPages } = usePagination(searchResults, 12)
  const Skeletons = new Array(12).fill("*");

  const handleKeyPress = () => {
    clearTimeout(timeoutHandler!)

    setTimeoutHandler(setTimeout(() => {
      handleSearch()
    }, 800))
  }

  const handleSearch = async () => {
    const query = inputRef?.current?.value?.trim()
    if (!query) return
    setIsFetching(true)
    const data = await fetchMovieSearch(query) as SearchResultType
    if (("success" in data && !data.success) || data?.errorMessage) {
      setError(true)
      return
    }
    setIsFetching(false)
    setSearchQuery(query)
    setSearchResults(data.results)
  }

  useEffect(() => {
    if (!searchResults.length) return
    setDataArr(searchResults)
  }, [searchResults])

  if (error) return (
    <ErrorPage />
  )

  return (
    <Box flex={1} py={4}>
      <Container maxWidth={"lg"}>
        <Stack>
          <Input
            inputRef={inputRef}
            sx={{ color: MILK, maxWidth: 500, py: 1, borderBottom: `1px solid #cccccc30` }}
            placeholder='Search movies, series...'
            autoFocus={true}
            onKeyDown={handleKeyPress}
          />
        </Stack>

        {searchQuery && (
          <Typography my={4} color={WHITE} fontSize={"1.5rem"}>Showing results for: <span style={{ color: MILK }}>{searchQuery}</span></Typography>
        )}

        <Grid container flex={1} spacing={3}>
          {
            isFetching ?
              Skeletons?.map((_, index) => <MovieCardSkeleton index={index} key={index} />) :
              pageData?.map((item, index) => <MovieCard handleClick={() => setSingleMovie(item)} index={index} {...item} key={item?.id} />)
          }
        </Grid>
      </Container>

      {!!pageData && (
        <Footer
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}  
    </Box>
  )
}

export default Search