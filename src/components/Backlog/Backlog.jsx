import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardContent, ClickAwayListener, Grid, Grow, ListItemIcon, Menu, MenuList, Paper, Popper, Typography, withStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';




// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

const useStyles = makeStyles((theme) => ({
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
  roots: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));



function Backlog() {


  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  // // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);


  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };



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
              {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} onClick={(event) => viewDetails(event, lists)}>edit</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu> */}

                  
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

 {/* <Button
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >View</Button>
                  <Popper open={open} 
                    anchorEl={anchorRef.current} 
                    role={undefined} 
                    transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList>
                              <MenuItem onClick={(event) => viewDetails(event, lists)}>Edit</MenuItem>
                              <MenuItem value={lists.id} onClick={(event) => handleDelete(lists.id)}>Delete</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                      )}
                  </Popper> */}

export default Backlog;
