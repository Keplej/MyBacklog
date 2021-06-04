import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
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
                {/* <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel>
                    <Select value={status.id}
                            name='status'
                            onChange={(event) => setStatus(event.target.value)}>
                                {getStatus.map((game) => {
                        return (
                        <MenuItem key={game.id} value={game.id}>
                            {game.name}
                        </MenuItem>
                          )
                        })}
                    </Select>
                    </InputLabel>
                </FormControl> */}
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


// <FormControl variant="filled" className={classes.formControl}>
//         <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-filled-label"
//           id="demo-simple-select-filled"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>