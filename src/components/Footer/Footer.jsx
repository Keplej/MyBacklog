import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
function Copyright() {
  return (
    <Typography variant="body2" color="text.primary">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/#/about">
        My Backlog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(6, 0),
    marginTop: 'auto',
    backgroundColor: 'transparant',
    color: '#fff',
  },
}));



function Footer() {
  const classes = useStyles();

  return (
  
  <footer className={classes.footer}>
     <Container maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Container>
  </footer>
  );
}

export default Footer;
