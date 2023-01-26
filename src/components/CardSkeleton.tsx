import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

interface CardSkeletonProps {} 

const CardSkeleton:React.FC<CardSkeletonProps> = () => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Stack spacing={2}>
        <Skeleton animation="wave" variant='circular' width={150} height={150} />
        <Skeleton animation="wave" variant="text" width={120} height={40} />
        <Skeleton animation="wave" variant="text" width={100} height={40} />
      </Stack>
    </Grid>
  )
}

export default CardSkeleton