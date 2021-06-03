import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Grid, IconButton, ListItemIcon, Menu, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '75%',
    float: 'left',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

function CurrentlyPlaying() {


  
  const dispatch = useDispatch();
  const list = useSelector(store => store.currentlistReducer);
  const history = useHistory();
  // const user = useSelector(store => store.user);
  
  const classes = useStyles();

  const viewDetails = (event, lists) => {
    console.log('Clicked on detail', lists);
    history.push(`/currentdetail/${lists.id}`);
  }


function handleDelete(id) {
  dispatch({type: 'DELETE_CURRENT', payload: id})
}

useEffect(() => {
dispatch({type: 'FETCH_CURRENT'});
}, []);


  // const dispatch = useDispatch();
  // const list = useSelector(store => store.currentlistReducer.data);
  // const user = useSelector(store => store.user);

  // const history = useHistory();
  
  // const classes = useStyles();

  // function handleDelete(id) {
  //   dispatch({type: 'DELETE_CURRENT', payload: id})
  // }

  // useEffect(() => {
  //   dispatch({type: 'GET_GAMES'});
  // }, []);



  return (
    <div className="container">
      <h2>Current Games</h2>
            <p>Testing to all items from db</p>
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

export default CurrentlyPlaying;
