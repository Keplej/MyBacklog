import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Completed() {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

      const dispatch = useDispatch();
      const list = useSelector(store => store.completedlistReducer.data);
      const user = useSelector(store => store.user);
      
      const classes = useStyles();


    function handleDelete(id) {
      dispatch({type: 'DELETE_COMPLETED', payload: id})
    }
    
    useEffect(() => {
    dispatch({type: 'GET_COMPLETED'});
    }, []);


    return(
        <div className="container">
            <h2>Completed Games</h2>
            <p>Testing to all items from db</p>
            <section>
            {list ? 
            <Card className={classes.root}>
                {list.map((completed) => 
                  <CardContent key={completed.id}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>{completed.name}</Typography>
                    <Typography variant="body2" component="p">{completed.description}</Typography>
                    <Button variant="contained" color="secondary" 
                    value={completed.id} onClick={(event) => handleDelete(completed.id)}>Delete</Button>
                  </CardContent>
                )}
            </Card> : ''}
          </section>
        </div>
    )
}

export default Completed;