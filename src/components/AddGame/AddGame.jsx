import { Button, FormControl, Grid, InputLabel, Link, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ParticleBackground from '../ParticlesConfig/ParticleBackground';



const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));


function AddGame() {
    
    const dispatch = useDispatch();

    //This is what we are using for our useStates to add a new game
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState(0);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    //This stores the new status of the game
    const getStatus = useSelector((store) => store.statuslistReducer);
    
    //This submits on submit for the new item when finished adding a new item
    const handleSubmit = (event) => {
        event.preventDefault();
        const addingGame = {
            name: name,
            description: description,
            url: url,
            status: status,
        }
        dispatch({type: 'ADDING_NEW_GAME', payload: addingGame});
        history.push('/home')
    }

    useEffect(() => {
        dispatch({type: 'FETCH_STATUS'})
    }, [])

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    
    return(
    <div>
      <ParticleBackground />
      <form onSubmit={handleSubmit}>
          <main className={classes.layout} >
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Add Game
              </Typography>
              <br />
              <br />
              <Typography variant="h6" gutterBottom>
                Add a New Game
               </Typography>
                 <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Game Name"
                      value={name}
                      type="text"
                      fullWidth
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Game Image"
                      value={url}
                      fullWidth
                      onChange={(event) => setUrl(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      multiline={true}
                      rows={17}
                      type="text"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      label="Game Description"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <FormControl className={classes.formControl}>
                      <InputLabel>Status</InputLabel>
                          <Select
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={status.id}
                          name='status'
                          onChange={(event) => setStatus(event.target.value)}
                          >
                          {getStatus.map((game) => {
                          return (
                              <MenuItem key={game.id} value={game.id}>
                              {game.name}
                              </MenuItem>
                          )
                          })}
                          </Select>
                      </FormControl>
                  </Grid>
                </Grid>
              <Button variant="contained" color="secondary" type="submit" fullWidth className={classes.button}>Submit</Button>
            </Paper>
          </main>
       </form>
      </div>
    )
}

export default AddGame;


