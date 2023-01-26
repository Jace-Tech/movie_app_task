import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { WHITE } from '../utils/colors'
import error from "../assets/oops.png"
import { useNavigate } from 'react-router-dom'

interface NotFoundPageProps {} 

const NotFoundPage:React.FC<NotFoundPageProps> = () => {
  const navigate = useNavigate()
  return (
    <Stack flex={1} justifyContent={"center"} alignItems={"center"}>
    <Container maxWidth={"sm"}>
      <img src={error} className="error-image"/>
      <Stack>
        <Stack spacing={1} justifyContent={"center"} alignItems={"center"}>
          <Typography textAlign={"center"} fontSize={"1.5rem"} color={WHITE}>Where are you off to?</Typography>
          <Typography textAlign={"center"} fontSize={".9rem"} fontWeight={300} color={"#999"}>Click on the button below to go back.</Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Button 
            onClick={() => navigate('/')} 
            sx={{ my: 5 }}
            variant='contained'
          >
            Go Back
          </Button>
        </Stack>

        <p className='link'>
          <a className='link' href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#query=404%20page&position=2&from_view=keyword">Image by storyset</a> on Freepik
        </p>
      </Stack>
    </Container>
  </Stack>
  )
}

export default NotFoundPage