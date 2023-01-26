import { Box, Button, Container, Grid, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorPage from '../partials/ErrorPage'
import { useMovieContext } from '../contexts/MovieContext'
import { MILK, WHITE } from '../utils/colors'
import Casts from '../partials/Casts'

import { IoTimerOutline } from 'react-icons/io5'
import { GiDirectorChair } from 'react-icons/gi'
import { MdStarRate } from 'react-icons/md'
import { RiFilePaper2Line } from 'react-icons/ri'
import MovieModal from '../partials/MovieModal'
import { useModalContext } from '../contexts/ModalContext'

interface SingleMovieProps { }

const SingleMovie: React.FC<SingleMovieProps> = () => {
  const { singleMovie, error, movieDetails, movieCasts } = useMovieContext()
  const { setIsModalOpen } = useModalContext()
  const navigate = useNavigate()

  const textSkeleton = new Array(2).fill("text")

  useEffect(() => {
    if (!singleMovie) navigate("/")
  }, [])

  if (error) return (
    <ErrorPage />
  )

  type ContentType = {
    name: string;
    Icon: (props: any) => JSX.Element;
    content: string | number | undefined;
  }
  const contents: ContentType[] = [
    { name: "Year of release:", Icon: (props: any) => <IoTimerOutline {...props} />, content: singleMovie?.year },
    { name: "Year of release:", Icon: (props: any) => <MdStarRate {...props} />, content: singleMovie?.imDbRating },
    { name: " Director:", Icon: (props: any) => <GiDirectorChair  {...props} />, content: movieCasts?.directors.items[0].name },
    { name: " Writer:", Icon: (props: any) => <RiFilePaper2Line {...props} />, content: movieCasts?.writers.items[0].name },
  ]

  return (
    <Box flex={1} py={5}>
      <Container maxWidth={"lg"}>
        <Typography color={WHITE} fontWeight={400} mb={4} fontSize={"2rem"}>Overview</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack>
              <img className='single-image' src={singleMovie?.image} />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Stack spacing={4}>
              <Typography color={WHITE} fontWeight={600} fontSize={"1.8rem"}>{singleMovie?.fullTitle}</Typography>

              {/* Short movieDetails */}
              <Stack spacing={2}>
                { !movieDetails ? textSkeleton.map((item, index) => (
                  <Stack spacing={1} key={`${item}-${index}`}>
                    <Skeleton animation="wave" variant="text" width={300} height={40} />
                    <Skeleton animation="wave" variant="text" width={300} height={40} />
                    <Skeleton animation="wave" variant="text" width={300} height={40} />
                  </Stack>
                )) : movieDetails.split("\n").slice(0, 2).map((detail, index) => (
                  <Typography textAlign={"justify"} key={`${index}-${detail.slice(0, 9)}`} color={MILK} whiteSpace={"pre-wrap"} fontWeight={300} fontSize={"1rem"}>
                    {index === 1 ? (
                      <>
                        {`${detail}...`}
                        <Link className='read-more' to={`/${singleMovie?.id}/plot`}>Read more</Link>
                      </>
                    ) : detail}
                  </Typography>
                ))}
              </Stack>

              {/* Others */}
              <Stack 
                color={WHITE} 
                width={"100%"} 
                spacing={3} 
                rowGap={2}
                direction={{ xs: "column", md: "row" }} 
                alignItems={{ xs: "flex-start", md: "center" }} 
                flexWrap={"wrap"}
              >
                {contents.map(({ Icon, name, content }) => (
                  <Stack direction="row" alignItems={"center"} spacing={.5}>
                    <Icon size={20} />
                    <Typography fontSize={".85rem"} textTransform={"capitalize"} >
                      {name}
                    </Typography>
                    <Typography color={MILK}>
                      {content}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              {/* Trailer */}
              <Stack width={"100%"}>
                <Button 
                  variant='contained' 
                  onClick={() => setIsModalOpen(true)}
                  sx={{ maxWidth: { xs: "100%", md: 150 }, width: "100%" }}
                >
                  Watch Trailer
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Casts Section */}
      <Casts />

      {/* Modal */}
      <MovieModal />
    </Box>
  )
}

export default SingleMovie