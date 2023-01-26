import { lazy, Suspense, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import Header from './components/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PageType } from './@types/common'
import { BLACK } from './utils/colors'

const Movies = lazy(() => import('./pages/Movies'))
const TvSeries = lazy(() => import('./pages/TvSeries'))
const SingleMovie = lazy(() => import('./pages/SingleMovie'))
const Search = lazy(() => import('./pages/Search'))
const MoviePlot = lazy(() => import('./pages/MoviePlot'))

import Home from './pages/Home'
import Loading from './components/Loading'
import NotFoundPage from './partials/NotFoundPage'

function App() {
  const { pathname } = useLocation()

  const pages: PageType[] = [
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
    { path: "/tv-series", element: <TvSeries /> },
    { path: "/single", element: <SingleMovie /> },
    { path: "/search", element: <Search /> },
    { path: "/:id/plot", element: <MoviePlot /> },
    { path: "*", element: <NotFoundPage /> },
  ]

  useEffect(() => {
    // Scroll to top of page
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Suspense fallback={<Loading />}>
      <Stack direction={"column"} minHeight={"100vh"} bgcolor={BLACK}>
        <Header />
        <Routes>
          {pages.map((page, index) => <Route {...page} key={`${index}-${page.path}`} />)}
        </Routes>
      </Stack>
    </Suspense>
  )
}

export default App
