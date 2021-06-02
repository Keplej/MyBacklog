import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";


function Detail() {

    const gameid = useSelector(store => store.backloglistReducer.data);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    

    const {id} = useParams(); 


    useEffect(() => {
        console.log('In ueseEffect param:', id);
        dispatch({type: 'FETCH_BACKLOG_DETAIL', payload: id})
    }, [])


    return (
        <div>
            <h2>Game Name:</h2>
            {gameid.map((detail) => {
                <span>{detail.name}</span>
            })}
            

        </div>
    )
}

export default Detail;