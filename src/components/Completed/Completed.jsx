import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import CompletedBackground from '../ParticlesConfig/CompletedBackground';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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


function Completed() {


      const dispatch = useDispatch();
      const list = useSelector(store => store.completedlistReducer);
      const history = useHistory();

      
      const classes = useStyles();

      const viewDetails = (event, lists) => {
        console.log('Clicked on detail', lists);
        history.push(`/completeddetail/${lists.id}`);
      }


    function handleDelete(id) {
      dispatch({type: 'DELETE_COMPLETED', payload: id})
    }
    
    useEffect(() => {
    dispatch({type: 'FETCH_COMPLETED'});
    }, []);


    return(
      <React.Fragment>
        <AppBar position="relative" className={classes.AppBar}>
          <Toolbar>
            <CheckCircleIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Completed Games
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Completed Games
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

export default Completed;