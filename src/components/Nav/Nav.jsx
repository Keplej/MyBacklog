import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import { Paper, Typography } from '@material-ui/core';



function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <Typography className="nav-title" variant="h5" fontFamily="Raleway" >My Backlog</Typography>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/current">
              Currently Playing
            </Link>
            <Link className="navLink" to="/backlog">
              Backlog
            </Link>
            <Link className="navLink" to="/completed">
              Completed
            </Link>
            <Link className="navLink" to="/addgame">
              Add Game
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
