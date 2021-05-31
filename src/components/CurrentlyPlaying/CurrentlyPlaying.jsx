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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
      <section>
      {list ? 
      <Card className={classes.root}>
        {list.map((game) => 
          // return(
            <CardContent key={game.id}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>{game.name}</Typography>
              <Typography variant="body2" component="p">{game.description}</Typography>
              {/* {(game && game.user_id === user.id) ?  */}
            <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
              <Menu id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem variant="contained" color="secondary" 
                value={game.id} onClick={(event) => handleDelete(game.id)}>Delete</MenuItem>
                <ListItemIcon>
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                </ListItemIcon>
              </Menu>
            </div>
              {/* : ''} */}
          </CardContent>
          // );
        )}
      </Card> : ''}
      </section>
      </Grid>
    </div>
  );
}

export default CurrentlyPlaying;
