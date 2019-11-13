import React from 'react';
import {Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
// import {MenuIcon} from '@material-ui/icons/Menu';
import './style.scss';


const Navbar = () => {
  return (
    <div className='container-fluid'>
      <div className='navbar'>
        <div className='navbar-brand'>
          <img src='' alt='ecomerce' />
          <h4>ecomerce</h4>
        </div>
        <div className='navbar-list'>
          <a className='navbar-item' href='signin'>signin</a>
          <a className='navbar-item' href='signup'>signup</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;


{/* <AppBar position="static" className='navbar'>
<Toolbar className='nav'>
  <IconButton edge="start" className='{classes.menuButton}' color="inherit" aria-label="menu">
    <MenuIcon />
  </IconButton>
  <Typography variant="h6" className='{classes.title}'>
    News
  </Typography>
  <Link to='/signin' type='button' className='link' color="inherit">Login</Link>
  <Link to='/signup' type='button' className='link' color="inherit">signup</Link>
</Toolbar>
</AppBar> */}