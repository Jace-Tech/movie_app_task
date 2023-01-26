import { Box, Collapse, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Slide, Stack, Typography } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GRAY, WHITE } from '../utils/colors'
import { MdOutlineLocalFireDepartment, MdOutlineLocalMovies, MdOutlineMonitor } from "react-icons/md"
import { IoSearchOutline } from "react-icons/io5"
import { HiOutlineBars3 } from "react-icons/hi2"
import { RxCross2 } from "react-icons/rx"
import Spacer from './Spacer'

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {pathname} = useLocation()
  const links = [
    { path: "/", name: "Trending", Icon: (prev: any) => <MdOutlineLocalFireDepartment {...prev} /> },
    { path: "/movies", name: "Movies", Icon: (prev: any) => <MdOutlineLocalMovies {...prev} /> },
    { path: "/tv-series", name: "TV Series", Icon: (prev: any) => <MdOutlineMonitor {...prev} /> },
    { path: "/search", name: "Search", Icon: (prev: any) => <IoSearchOutline {...prev} /> },
  ]

  // Toggle close when the route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Box py={1.8} bgcolor={GRAY} position={"sticky"} top={0} left={0} width={"100%"}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} alignItems={"center"}>
          {/* Logo */}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant='h6' color={WHITE}>MoviesApp</Typography>
          </Link>

          {/* Nav Links */}
          <Stack pl={3} direction={"row"} spacing={3} display={{ xs: "none", sm: "flex" }}>
            {links.map(link => <LinkItem {...link} key={link.name} />)}
          </Stack>

          {/* Spacer */}
          <Spacer flex={1} display={{ xs: "flex", sm: "none" }} />

          {/* Mobile Menu Button */}
          <Stack pl={3} direction={"row"} spacing={3} display={{ xs: "flex", sm: "none" }}>
            
            <IconButton sx={{ color: WHITE, transition: ".4s", transform: `rotate(${isOpen ? '90deg' : '0deg'})` }} onClick={() => setIsOpen(prev => !prev)} size={"large"}>
              { isOpen ? <RxCross2 /> : <HiOutlineBars3 /> }
            </IconButton>
          </Stack>
        </Stack>

        {/* Mobile Nav */}
        <Collapse in={isOpen} sx={{ display:{ xs: "block", sm: "none" }}}>
          <List>
            {links.map(link => <MobileLinkItem {...link} key={link.name} /> )}
          </List>
        </Collapse>
      </Container>
    </Box>
  )
}


interface LinkItemProp {
  path: string;
  name: string;
  Icon: (props: any) => JSX.Element;
}
const LinkItem: React.FC<LinkItemProp> = ({ path, name, Icon }) => {
  const { pathname } = useLocation()
  let isActive = pathname === path
  return (
    <Link to={path} style={{ textDecoration: "none", opacity: isActive ? 1 : .5 }}>
      <Stack direction={"row"} alignItems={"center"} spacing={1} whiteSpace={"nowrap"}>
        <Icon size={22} color={WHITE} />
        <Typography variant='subtitle1' textOverflow={"ellipsis"} color={WHITE}>{name}</Typography>
      </Stack>
    </Link>
  )
}


interface MobileLinkItemProp {
  path: string;
  name: string;
  Icon: (props: any) => JSX.Element;
}
const MobileLinkItem: React.FC<MobileLinkItemProp> = ({ path, name, Icon }) => {
  const { pathname } = useLocation()
  let isActive = pathname === path
  const navigate = useNavigate()

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigate(path)} sx={{ color: WHITE, opacity: isActive ? 1 : .4 }}>
        <ListItemIcon sx={{ color: WHITE, opacity: isActive ? 1 : .4  }}>
          <Icon size={24} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}

export default Header
