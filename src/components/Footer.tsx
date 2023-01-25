import { Box, Pagination, Stack, Container } from '@mui/material'
import React from 'react'

interface FooterProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (count: number) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <Box pt={3}>
      <Container maxWidth={"lg"}>
        <Stack justifyContent={"center"} direction={"row"}>
          <Pagination
            className='page-custom'
            variant='outlined'
            color="primary"
            count={totalPages}
            size={"large"}
            defaultPage={currentPage}
            onChange={(_, pageNum) => setCurrentPage(pageNum)}
          />
        </Stack>

      </Container>
    </Box>
  )
}

export default Footer