"use client"
import * as React from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {} from '@mui/material';
import { Modal } from 'antd';
import {logOut} from '@/lib/api/actions'
import OutputIcon from '@mui/icons-material/Output';

const pages = ['/discounts/list', '/geolocation'];
const pagesToRussian:any = {"/discounts/list": "Скидки списком", "/geolocation": "Геолокация"};


export default function ResponsiveAppBar() {
  const { data: session, update } = useSession();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (     
    <>

    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Avatar  variant="square" alt="лого" src="/files/logo-min.png"  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Davse.ru
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`${page}`}><Typography textAlign="center">{pagesToRussian[page]}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
          <Link href="/">
          <Avatar  variant="square" alt="лого" src="/files/logo-min.png"  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  /> </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Davse.ru
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={`${page}`} key={page}><Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pagesToRussian[page]}
              </Button></Link>
            ))}
            <Link href={`https://www.ozon.ru/my/orderlis`} key={`out`} target='blank'><Button
                key={`out`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Commercial offer
                <OutputIcon />
              </Button></Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {session ? 
                <a><Avatar alt="Remy Sharp" src="/files/icons8-export-100.png"  sx={{ p: 0 }}   onClick={async () => {await logOut();}}/></a>
          :
          <Link href="/api/auth/signin"><Avatar alt="Remy Sharp" src="/files/icons8-enter-64.png"  sx={{ p: 0 }}/></Link>
          }
                
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </> 
  );
};

