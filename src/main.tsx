import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MovieContextProvider from './contexts/MovieContext'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: "Work Sans, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif"
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MovieContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MovieContextProvider>
  </BrowserRouter>
)
