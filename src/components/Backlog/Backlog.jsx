import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import GamesIcon from '@material-ui/icons/Games';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    color: '#efefef',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  AppBar: {
    backgroundColor: '#e01616',
  },
  gamesHeader: {
    color: '#e01616',
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

  return(
    <React.Fragment>
      {/* <CssBaseline /> */}
      <AppBar position="relative" className={classes.AppBar}>
        <Toolbar>
          <AddToQueueIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Backlog
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Backlog Games
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {list.map((lists, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia  image={lists.image_url} className={classes.cardMedia} />
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.gamesHeader} gutterBottom variant="h5" component="h2">
                  {lists.name}
                  </Typography>
                  <Typography>
                  {lists.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={(event) => viewDetails(event, lists)}>
                    View
                  </Button>
                  <Button color="primary" size="small" color="secondary" value={lists.id} onClick={(event) => handleDelete(lists.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </React.Fragment>
  )
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
