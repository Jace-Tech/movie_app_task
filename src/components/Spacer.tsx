import { Box, BoxProps } from '@mui/material'
import React from 'react'

interface SpacerProps extends BoxProps{} 

const Spacer:React.FC<SpacerProps> = ({ ...props }) => <Box {...props} flex={1} />

export default Spacer