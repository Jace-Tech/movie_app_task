import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import error from "../assets/error.png"
import { GRAY, WHITE } from '../utils/colors'

interface ErrorPageProps {} 

const ErrorPage:React.FC<ErrorPageProps> = () => {
  return (
    <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
      <Container maxWidth={"sm"}>
        <img src={error} className="error-image"/>
        <Stack>
          <Stack spacing={1} justifyContent={"center"} alignItems={"center"}>
            <Typography textAlign={"center"} fontSize={"1.5rem"} color={WHITE}>Hey!, you broke it!!!</Typography>
            <Typography textAlign={"center"} fontSize={".9rem"} fontWeight={300} color={"#999"}>Just kidding 😀. Please click on the button below to refresh.</Typography>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Button 
              onClick={() => window.location.reload()} 
              sx={{ my: 5 }}
              variant='contained'
            >
              Refresh Page
            </Button>
          </Stack>
          <p className='link'>
            <a target="_blank" href="https://icons8.com/icon/2791/film-reel">Film Reel</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </p>
          <a className='link' href="https://storyset.com/internet">Internet illustrations by Storyset</a>
        </Stack>
      </Container>
    </Stack>
  )
}

export default ErrorPage