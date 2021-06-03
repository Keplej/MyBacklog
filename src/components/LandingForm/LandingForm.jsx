import { Avatar, CssBaseline, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/#/home">
        My Backlog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// https://source.unsplash.com/random
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://wallpapercave.com/wp/wp2841763.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function LandingForm() {

  const history = useHistory();
  const classes = useStyles();

  const registrationHandle = () => {
    history.push('/registration');
  }

  const signinHandle = () => {
    history.push('/login');
  }
  


  return (
    <Grid container component="main" 
    className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SportsEsportsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Welcome to My Backlog
          </Typography>
          <br />
          <Typography component="h3">
            My Backlog is a videogame catalog website that makes it easy to customize, organize, and keep track of your games.
          </Typography>
          <br />
              <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={registrationHandle}
            >
              Create a new Account
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={signinHandle}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default LandingForm;