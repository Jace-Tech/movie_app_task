import { Modal, Box, Typography, Container, Stack, IconButton, Dialog, DialogTitle, DialogContent, Skeleton, DialogActions, Button } from '@mui/material'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import Spacer from '../components/Spacer'
import { useModalContext } from '../contexts/ModalContext'
import { useMovieContext } from '../contexts/MovieContext'
import { GRAY, WHITE } from '../utils/colors'


interface MovieModalProps { }

const MovieModal: React.FC<MovieModalProps> = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext()
  const { singleMovie, movieTrailer } = useMovieContext()

  return (
    <Dialog
      maxWidth={"md"}
      PaperProps={{ sx: { width: "100%", bgcolor: GRAY, } }}
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle width={"100%"}>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography fontSize={"1.4rem"} color={WHITE}>{singleMovie?.title}</Typography>

          <Spacer />

          <IconButton sx={{ color: WHITE }} onClick={() => setIsModalOpen(false)}>
            <RxCross2 />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        { movieTrailer ? (
          <embed src={movieTrailer?.linkEmbed} type="" className="movie-embed" />
        ) : (
          <Skeleton variant={"rectangular"} width={"calc(100%)"} height={400} animation={"wave"} />
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 4 }}>
        <Button variant='contained' onClick={() => setIsModalOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MovieModal