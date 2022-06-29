import { Container } from '@mui/material'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Home  from '@mui/icons-material/Home';
import { ShoppingCart } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import React, {useState} from 'react'
import { CartState } from "../Context";

const Navbar = () => {
    const {count} = CartState();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <Link to ='/' style={{textDecoration: 'none', color: 'black'}}>          
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Home />
          </IconButton>
          </Link>

          <Link to='/cart' style={{textDecoration: 'none', color: 'black'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCart/>
            <Badge badgeContent={count} color="secondary" size="small"/>
          </IconButton>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircle />
          </IconButton>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar

