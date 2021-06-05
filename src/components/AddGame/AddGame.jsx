import { AppBar, Button, CssBaseline, FormControl, Grid, InputLabel, Link, MenuItem, MenuList, Paper, Select, Step, StepLabel, Stepper, TextField, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddGameDetail from './AddGameDetail';


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

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [url, setUrl] = useState('');
    const [status, setStatus] = useState(0);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    // const status = useSelector((store) => store.status);

    // const addGame = useSelector(store => store.addGameReducer);

    const getStatus = useSelector((store) => store.statuslistReducer);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const addingGame = {
            name: name,
            description: description,
            // url: url,
            status: status,
        }
        dispatch({type: 'ADDING_NEW_GAME', payload: addingGame});
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
                      multiline={true}
                      rows={17}
                      type="text"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      label="Game Description"
                      fullWidth
                      autoComplete="shipping address-line2"
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
       



         /* <form onSubmit={handleSubmit}>
           <h3>Game Title:</h3>
                 <TextField 

        //         type="text"
        //         placeholder="Game Title"
        //         value={name}
        //         onChange={(event) => setName(event.target.value)}
        //         />
        //     <h3>Game Description:</h3>
        //         <textarea 
        //         type="text"
        //         placeholder="Description"
        //         value={description}
        //         onChange={(event) => setDescription(event.target.value)}
        //         />
                
        //         <br />
        //         <select 
        //         value={status.id}
        //         name='status'
        //         onChange={(event) => setStatus(event.target.value)}
        //         >
        //             {getStatus.map((game) => {
        //                 return (
        //                     <option 
        //                     key={game.id} value={game.id}>{game.name}
        //                     </option>
        //                 )
        //             })}
        //         </select>
        //         <br />
        //     <Button variant="contained" color="secondary" type="submit">Submit</Button>
        // </form> */
    )
}

export default AddGame;


