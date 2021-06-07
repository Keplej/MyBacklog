import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Avatar, Button, Container, CssBaseline, Grid, TextField } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Box from '@material-ui/core/Box';
import ParticleBackground from '../ParticlesConfig/ParticleBackground';
const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'transparent',
        color: 'white',
        '&:hover': {
          backgroundColor: 'fff'
        },
        '&.Mui-focused': {
          backgroundColor: 'fff'
        }
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
  paper: {
    marginTop: theme.spacing(8),
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
  textField: {
    input: 'white',
  },
  palette: {
    type: 'dark',
  },
  cssLabel: {
    color: "#fff",
    "&.Mui-focused": {
      color: "#fff"
    },
    cssOutlinedInput: {
      "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
        borderColor: "#fff" //default
      },
      "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
        borderColor: "#fff" //hovered #DCDCDC
      },
      "&$cssFocused $notchedOutline": {
        borderColor: "#fff" //focused
      }
    },
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {}
  },
}));



function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const classes = useStyles();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div>
      <ParticleBackground />
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        {/* <ThemeProvider theme={theme}>
          <TextField variant="filled"/>
        </ThemeProvider> */}
        <Avatar>
          <LockOpenIcon />
        </Avatar>
        <Typography className={classes.root} component="h1" variant="h5">
          Sign in
        </Typography>
        <form 
        className={classes.form} 
        noValidate 
        onSubmit={login}>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <ThemeProvider theme={theme}>
          <TextField
            className={classes.cssLabel}
            variant="filled"
            margin="normal"
            fullWidth
            type="text"
            name="username"
            label="Username"
            id="username"
            required
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              },
              inputMode: "numeric"
            }}
          />
          
          <TextField
            className={classes.cssLabel}
            type="password"
            name="password"
            variant="filled"
            margin="normal"
            label="Password"
            id="password"
            fullWidth
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              },
              inputMode: "numeric"
            }}
          />
          </ThemeProvider>
          <Button
            type="submit"
            name="submit"
            value="Log In"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
          <Grid item xs>
                <Link href="http://localhost:3000/#/home" variant="body2" className={classes.root}>
                  Back Home
                </Link>
              </Grid>
            <Grid item>
              <Link href="http://localhost:3000/#/registration" variant="body2" className={classes.root}>
                {"Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}

export default LoginForm;
