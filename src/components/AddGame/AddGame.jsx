import { Button, CssBaseline, FormControl, InputLabel, Link, MenuItem, Paper, Select, Step, StepLabel, Stepper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@material-ui/icons/MoreVert';


// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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
  }));

function AddGame() {
    
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [url, setUrl] = useState('');
    const [status, setStatus] = useState(0);
    const classes = useStyles();
    
    // const status = useSelector((store) => store.status);
    
    const addGame = useSelector(store => store.addGameReducer);

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

    
    return(
        
        // <React.Fragment>
        // <main className={classes.layout}>
        //     <Paper className={classes.paper}>
        //     <Typography component="h1" variant="h4" align="center">
        //         Add New Game
        //     </Typography>
        //     <Stepper className={classes.stepper}>
        //         <Step>
        //             <StepLabel></StepLabel>
        //         </Step>
        //     </Stepper>
        //     <React.Fragment>
                
        //         <React.Fragment>
        //             <Typography variant="h5" gutterBottom>
        //             Thank you for your order.
        //             </Typography>
        //             <Typography variant="subtitle1">
        //             Your order number is #2001539. We have emailed your order confirmation, and will
        //             send you an update when your order has shipped.
        //             </Typography>
        //         </React.Fragment>

        //         <React.Fragment>

        //             <div className={classes.buttons}>
                   
        //                 <Button className={classes.button}>
        //                 Back
        //                 </Button>

        //             <Button
        //                 variant="contained"
        //                 color="primary"
                        
        //                 className={classes.button}
        //             >
                       
        //             </Button>
        //             </div>
        //         </React.Fragment>

        //     </React.Fragment>
        //     </Paper>
        //     <Copyright />
        // </main>
        // </React.Fragment>












        <form onSubmit={handleSubmit}>
            <h3>Game Title:</h3>
                <TextField 
                type="text"
                placeholder="Game Title"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            <h3>Game Description:</h3>
                <textarea 
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
                
                <br />
                <select 
                value={status.id}
                name='status'
                onChange={(event) => setStatus(event.target.value)}
                >
                    {getStatus.map((game) => {
                        return (
                            <option 
                            key={game.id} value={game.id}>{game.name}
                            </option>
                        )
                    })}
                </select>
                <br />
            <Button variant="contained" color="secondary" type="submit">Submit</Button>
        </form>
    )
}

export default AddGame;


