import { Box, CircularProgress } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { BLACK } from '../utils/colors'

interface LoadingProps { }

const Loading: React.FC<LoadingProps> = () => {
  return (
    <Stack width="100%" height="100%" color={"#333"} position="fixed" bgcolor={BLACK} p={1}>
      <CircularProgress 
        variant='indeterminate'
        color='inherit'
        size={30}
      />
    </Stack>
  )
}

export default Loading