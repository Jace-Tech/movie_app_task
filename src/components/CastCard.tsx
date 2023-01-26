import { Grid, Stack, Typography } from '@mui/material'
import React, {useState} from 'react'
import { ActorDetail } from '../@types/common'
import { MILK, WHITE } from '../utils/colors'
import { BROKEN_IMAGE } from '../utils/constants'


const CastCard: React.FC<ActorDetail> = ({ id, asCharacter, image, name }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <Grid 
      item xs={6} sm={4} 
      md={3} lg={2} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack spacing={2} color={WHITE}>
        <img className={`cast-image ${isHovered ? 'show' : ''}`} src={image || BROKEN_IMAGE} />
        <Stack spacing={1}>
          <Stack width={"100%"} alignItems={"center"}>
            <Typography
              color={MILK}
              fontWeight={300}
              letterSpacing={1}
              fontSize={".7rem"}
              textTransform={"uppercase"}
            >
              Name:
            </Typography>
            <Typography fontSize={".9rem"}>{name}</Typography>
          </Stack>
          <Stack width={"100%"} alignItems={"center"}>
            <Typography
              color={MILK}
              fontWeight={300}
              letterSpacing={1}
              fontSize={".7rem"}
              textTransform={"uppercase"}
            >
              Character Played:
            </Typography>
            <Typography fontSize={".9rem"}>{asCharacter}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  )
}

export default CastCard