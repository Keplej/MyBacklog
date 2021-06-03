import { Button, Card, Grid, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function CurrentlyPlayingDetail() {
    const list = useSelector(store => store.currentDetailReducer);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    // const classes = useStyles();
    

    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);

        setName(list.name);
        setDescription(list.description);
    }

    const saveEdit = () => {
        const updatedCurrently = {
            id: list.id,
            name: name,
            description: description,
        }
        console.log('updated backlog detail:', updatedCurrently);
        dispatch({type: 'UPDATE_CURRENT', payload: updatedCurrently});
 

        setEditMode(false)
        history.push('/current');
    }

    const {id} = useParams(); 
    

    useEffect(() => {
        console.log('In ueseEffect param:', id);
        dispatch({type: 'FETCH_CURRENT_DETAIL', payload: id})
    }, [])
    

    return (
        <div className="container">
            <Grid>
            <Card className="container"> 
            <h2>Game Name:</h2>
            <Button variant="contained" color="primary" onClick={() => {history.push('/current')}}>Back</Button>

            {editMode === false &&
            <Button variant="contained" color="secondary" onClick={handleEdit}>Edit</Button>
            }
            {list && list.name && editMode ?
            <div>
                <label>Game Name:</label>
                <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4} type="text" value={name} 
                onChange={(event) => setName(event.target.value)}/>
            </div>
            :
            <div>
                <label>Game Name:</label>
                <span>{list.name}</span>
            </div>
            }
            {list && list.description && editMode ?
            <div>
                <label>Description:</label>
                <TextField
                id="outlined-multiline-flexible"
                // label="Description"
                multiline
                rowsMax={15}
                variant="outlined"
                defaultValue="Default Value"
                value={description} 
                onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            :
            <div>
                <label>Description:</label>
                <span>{list.description}</span>
            </div>
            }
            {editMode &&
            <Button variant="contained" color="secondary" onClick={saveEdit}>Save</Button>
            }
                </Card>
            </Grid>
        </div>
    )
}

export default CurrentlyPlayingDetail;