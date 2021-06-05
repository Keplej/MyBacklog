import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function AddGameDetail() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [url, setUrl] = useState('');
    const [status, setStatus] = useState(0);
    const classes = useStyles();
    
    // const status = useSelector((store) => store.status);
    // const [activeStep, setActiveStep] = React.useState(0);


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

    

    return (
        <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add a New Game
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            label="Game Name"
            value={name}
            fullWidth
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline={true}
            rows={17}
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
                value={status.id}
                name='status'
                onChange={(event) => setStatus(event.target.value)}
                >
                {getStatus.map((game) => {
                return (
                    <MenuItem key={game.id} value={game.id}>
                    {game.id}
                    </MenuItem>
                )
                })}
                </Select>
            </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
    )
}

export default AddGameDetail;

