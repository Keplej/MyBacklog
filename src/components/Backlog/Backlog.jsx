import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'
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



function Backlog() {

  const dispatch = useDispatch();
  const list = useSelector(store => store.backloglistReducer.data);
  const user = useSelector(store => store.user);
  const classes = useStyles();

  useEffect(() => {
    dispatch({type: 'GET_BACKLOG_GAMES'})
  }, []);

  return (
    <div className="container">
        <h2>Your Backlog</h2>
        <p>Testing to all items from db</p>
        <section>
        {list ? <Card className={classes.root}>
        {list.map((backlog) => {
          return(
            <CardContent key={backlog.id}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>{backlog.name}</Typography>
              <Typography variant="body2" component="p">{backlog.description}</Typography>
              {(backlog && backlog.user_id === user.id)}
          
          </CardContent>
          );
        })}
      </Card> : ''}
        </section>
    </div>
  );
}

export default Backlog;
