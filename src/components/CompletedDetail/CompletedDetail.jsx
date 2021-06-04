import { Button, Card, Grid, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // minWidth: 275,
        // width: '75%',
        // float: 'left',
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

function CompletedDetail() {

    const list = useSelector(store => store.completedDetailReducer);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(0);
    const history = useHistory();


    const getStatus = useSelector((store) => store.statuslistReducer);

    const classes = useStyles();
    

    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);

        setName(list.name);
        setDescription(list.description);
        setStatus(list.status);
    }

    const saveEdit = () => {
        const updatedCompleted = {
            id: list.id,
            name: name,
            description: description,
            status: status,
        }
        console.log('updated backlog detail:', updatedCompleted);
        dispatch({type: 'UPDATE_COMPLETED', payload: updatedCompleted});
 

        setEditMode(false)
        history.push('/completed');
    }

    const {id} = useParams(); 
    

    useEffect(() => {
        console.log('In ueseEffect param:', id);
        dispatch({type: 'FETCH_COMPLETED_DETAIL', payload: id})
        dispatch({type: 'FETCH_STATUS', payload: id})
    }, [])


    return (
        <Grid>
        <Card className="container"> 
            <h2>Game Name:</h2>
            <Button variant="contained" color="primary" onClick={() => {history.push('/completed')}}>Back</Button>

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
            {list && list.status && editMode ?
            <div>
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
            </div>
            :
            <div>
                <label>Status:</label>
                <span>{list.status}</span>
            </div>
            }
            {editMode &&
            <Button variant="contained" color="secondary" onClick={saveEdit}>Save</Button>
            }
        </Card>
        </Grid>
    )
}

export default CompletedDetail;


{/* <select 
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
                </select> */}