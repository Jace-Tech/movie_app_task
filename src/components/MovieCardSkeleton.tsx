import { Grid, Grow, Skeleton, Slide, Stack } from '@mui/material'
import React from 'react'
import { GRAY } from '../utils/colors'

interface SkeletonProp {
  index: number;
}
const MovieCardSkeleton: React.FC<SkeletonProp> = ({ index }) => {
  return (
    <Grow in timeout={Number(`${index + 1}00`)}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack p={2} bgcolor={GRAY} borderRadius={1}>
          <Skeleton
            variant='rectangular'
            width='100%'
            height={250}
            animation="wave"
          />
          <Stack>
            <Skeleton variant='text' width={150} height={35} animation="wave" />
          </Stack>
        </Stack>
      </Grid>
    </Grow>
  )
}

export default MovieCardSkeleton