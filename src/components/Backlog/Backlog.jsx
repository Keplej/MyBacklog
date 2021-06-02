import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '75%',
    float: 'left',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});



function Backlog() {

  const dispatch = useDispatch();
  const list = useSelector(store => store.backloglistReducer);
  // const user = useSelector(store => store.user);
  const classes = useStyles();
  const history = useHistory();


  const viewDetails = (event, lists) => {
    console.log('Clicked on detail', lists);
    history.push(`/detail/${lists.id}`);
  }

  function handleDelete(id) {
    dispatch({type: 'DELETE_BACKLOG', payload: id})
  }


  useEffect(() => {
    dispatch({type: 'FETCH_BACKLOG_GAMES'})
  }, []);

  return (
    <div className="container">
      <h2>My Backlog</h2>
      <Grid container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <section>
          {list.map((lists, i) => {
            return(
            <Card className={classes.root} key={i}>
              <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>{lists.name}</Typography>
              <Typography variant="body2" component="p">{lists.description}</Typography>
              <Button variant="contained" color="secondary" onClick={(event) => viewDetails(event, lists)}>View</Button>
              <Button color="primary" value={lists.id} onClick={(event) => handleDelete(lists.id)}>Delete</Button>
              </CardContent>
            </Card>
            )
          })}
        </section>
      </Grid>
    </div>
  );
}

export default Backlog;
