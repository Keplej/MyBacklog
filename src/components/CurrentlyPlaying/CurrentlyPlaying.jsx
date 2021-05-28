import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

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

function CurrentlyPlaying() {

  const dispatch = useDispatch();
  const list = useSelector(store => store.currentlistReducer.data);
  const user = useSelector(store => store.user);
  
  const classes = useStyles();

  function handleDelete(id) {
    dispatch({type: 'DELETE_CURRENT', payload: id})
  }

  useEffect(() => {
    dispatch({type: 'GET_GAMES'});
  }, []);



  return (
    <div className="container">
      <h2>Currently Playing</h2>
      <p>Testing to all items from db</p>
      <section>
      {list ? 
      <Card className={classes.root}>
        {list.map((game) => 
          // return(
            <CardContent key={game.id}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>{game.name}</Typography>
              <Typography variant="body2" component="p">{game.description}</Typography>
              {/* {(game && game.user_id === user.id) ?  */}
              <Button variant="contained" color="secondary" 
              value={game.id} onClick={(event) => handleDelete(game.id)}>Delete</Button>
              <Button>Edit</Button>
              {/* : ''} */}
          </CardContent>
          // );
        )}
      </Card> : ''}
      </section>
    </div>
  );
}

export default CurrentlyPlaying;
