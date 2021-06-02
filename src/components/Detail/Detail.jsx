import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";


function Detail() {

    const list = useSelector(store => store.backloglistReducer);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    

    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);

        setName(list.name);
        setDescription(list.description);
    }

    const saveEdit = () => {
        const updatedBacklog = {
            id: list.id,
            name: name,
            description: description,
        }
        console.log('updated backlog detail:', updatedBacklog);
        dispatch({type: 'UPDATE_BACKLOG', payload: updatedBacklog});

        setEditMode(false)
        history.push('/backlog');
    }

    const {id} = useParams(); 
    
    


    useEffect(() => {
        console.log('In ueseEffect param:', id);
        dispatch({type: 'FETCH_BACKLOG_DETAIL', payload: id})
    }, [])


    return (
        <div>
            <h2>Game Name:</h2>
            <button onClick={() => {history.push('/backlog')}}>Back</button>

            {editMode === false &&
            <button onClick={handleEdit}>Edit</button>
            }
            {list && list.name && editMode ?
            <div>
                <label>Game Name:</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
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
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/>
            </div>
            :
            <div>
                <label>Description:</label>
                <span>{list.description}</span>
            </div>
            }
            {editMode &&
            <button onClick={saveEdit}>Save</button>
            }
        </div>
    )
}

export default Detail;