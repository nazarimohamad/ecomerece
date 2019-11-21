import React from 'react';
import {connect} from 'react-redux'
import {logout} from '../store/actions/auth';
import {Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import tshoe from '../images/T-shoe.jpg';
import './style.scss';


const Navbar = ({currentUser, logout}) => {


  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }


  return (
    <div className='container-fluid'>
      <div className='navbar'>
        <div className='navbar-brand'>
          <a href='/'>
            <img src={tshoe} alt='tshoe' />
            <h4>T-shoe</h4>
          </a>
        </div>
        {currentUser.isAuthenticated ?
        (
          <div className='navbar-list'>
            <a className='navbar-item' onClick={handleLogout}>logout</a>
            <a className='navbar-item' href='/profile'><PersonIcon /></a>
          </div>
        )
        :
        (
          <div className='navbar-list'>
            <a className='navbar-item' href='/signin'>signin</a>
            <a className='navbar-item' href='/signup'>signup</a>
          </div>
        )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, {logout})(Navbar);


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