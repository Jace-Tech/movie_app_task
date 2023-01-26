import { Grid, Grow, Slide, Stack, Typography } from '@mui/material'
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MovieCardProps } from '../@types/common';
import { GRAY, WHITE } from '../utils/colors';
import { BROKEN_IMAGE } from '../utils/constants';



const MovieCard: React.FC<MovieCardProps> = ({ image, fullTitle, index, handleClick, title }) => {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <Grow in timeout={Number(`${index! + 1}00`)}>
      <Grid 
        item xs={12} sm={6} 
        md={4} lg={3} 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >
        <Stack minHeight={380} p={2} bgcolor={GRAY} borderRadius={1}>
          <div className={`imgcard-box ${isHovering ? 'zoom' : ''}`}>
            <img className={"moviecard-img"} src={image || BROKEN_IMAGE} />
          </div>
          <Stack>
            <Typography 
              sx={{ "&:hover": { 
                textDecoration: "underline" 
              }, cursor: "pointer" }} 
              onClick={handleClick} color={WHITE} 
              textTransform={"capitalize"} 
              fontSize={".9rem"} 
              pt={1}
            >
              {fullTitle || title}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grow>
  )
}

export default MovieCard