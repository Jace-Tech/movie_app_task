import { Box, Pagination, Stack, Container, Typography, Link } from '@mui/material'
import React from 'react'
import { MILK, WHITE } from '../utils/colors';

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
          {Boolean(totalPages) && (
            <Pagination
              className='page-custom'
              variant='outlined'
              color="primary"
              count={totalPages}
              boundaryCount={1}
              size={"large"}
              defaultPage={currentPage}
              onChange={(_, pageNum) => setCurrentPage(pageNum)}
            />
          )}
        </Stack>
        <Typography textAlign={"center"} color={MILK} mt={4} mb={3} fontSize={".9rem"} fontWeight={300}>Made with {"❤️"} by <Link fontWeight={500} color={WHITE} href="https://linktr.ee/jace_tech">J.A.C.E</Link></Typography>
      </Container>
    </Box>
  )
}

export default Footer