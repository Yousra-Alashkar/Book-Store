import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


function Header() {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{backgroundColor:'#e0b283'}}>
        <Toolbar>
          <Container sx={{ display: 'flex' , justifyContent:'space-between' ,alignItems:'center'}}>
          <Box sx={{ display:'flex' ,alignItems:'center'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AutoStoriesIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Book Store
          </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}} >
            <Link to={'/'}>
              <Button sx={{ color: '#fff'}}>Home</Button>
            </Link>
            <Link to={'/library'}>
              <Button sx={{ color: '#fff'}}>library</Button>
            </Link>
            <Link to={'/cart'}>
              <Button sx={{ color: '#fff'}} >Cart</Button>
            </Link>
            <Link to={'/payment'}>
              <Button sx={{ color: '#fff'}} >Payment</Button>
            </Link>
          </Box>
          </Container>
        </Toolbar>
      </AppBar>
      
    </Box>
  );


}


export default Header;
