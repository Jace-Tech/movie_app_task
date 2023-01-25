import { lazy, Suspense } from 'react'
import { Box, Stack } from '@mui/material'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { PageType } from './@types/common'
import { BLACK } from './utils/colors'

const Category = lazy(() => import('./pages/Category'))
const SingleCard = lazy(() => import('./pages/SingleCard'))

import Home from './pages/Home'
import Loading from './components/Loading'

function App() {

  const pages: PageType[] = [
    { path: "/", element: <Home /> },
    { path: "/:cat", element: <Category /> },
    { path: "/single", element: <SingleCard /> },
  ]

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
