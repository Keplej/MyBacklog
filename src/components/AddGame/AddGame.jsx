import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddGame() {
    
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [url, setUrl] = useState('');
    const [status, setStatus] = useState(1);
    
    // const user = useSelector(store => store.user);
    
    const addGame = useSelector(store => store.addGameReducer);



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


    return(
        <form onSubmit={handleSubmit}>
            <h3>Game Title:</h3>
                <input 
                type="text"
                placeholder="Game Title"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            <h3>Game Description:</h3>
                <input 
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
                
                <br />
                <select 
                placeholder="Select Status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                >
                    {addGame.map((game) => {
                        return (
                            <option 
                            key={game.id} value={game.id}>{game.name}
                            </option>
                        )
                    })}
                </select>
                <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddGame;