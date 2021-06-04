import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, Grid, Link, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import './UserPageCSS.css';



const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  }));



  const footers = [
    // {
    //   title: 'Company',
    //   description: ['Team', 'History', 'Contact us', 'Locations'],
    // },
    // {
    //   title: 'Features',
    //   description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    // },
    // {
    //   title: 'Resources',
    //   description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    // },
    // {
    //   title: 'Legal',
    //   description: ['Privacy policy', 'Terms of use'],
    // },
  ];

function UserPageForm() {
    const classes = useStyles();
    const user = useSelector((store) => store.user);
    const history = useHistory();


    return(
        <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Welcome, {user.username}!
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            My Backlog Profile {user.username}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            This is your dashboard, Here we can navigate to your different lists {user.username}!
          </Typography>
        </Container>
        <Container  maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
              <Grid md={4} sm={6}> 
                <Card className="card">
                  <CardHeader
                    title='Completed'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                      </Typography>
                    </div>
                    <ul>
                        <Typography 
                        component="li" 
                        variant="subtitle1" 
                        align="center" > 
                        Here we can go to our Completed list
                        </Typography>
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button 
                        fullWidth variant='outlined'
                        color="primary"
                        onClick={() => {history.push('/completed')}}>
                    Completed
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
              <Grid  xs={12} md={4}>
                <Card className="card">
                  <CardHeader
                    title='Backlog'
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                      </Typography>
                    </div>
                    <ul>
                        <Typography component="li" variant="subtitle1" align="center">
                        Here we can go to our Backlog list
                        </Typography>
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button  
                    color="primary"
                    fullWidth variant='outlined' 
                    onClick={() => {history.push('/backlog')}}>
                        Backlog
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
              <Grid i xs={12} sm={12} md={4}>
                <Card className="card">
                  <CardHeader
                    title="Current"
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                      </Typography>
                    </div>
                    <ul>
                        <Typography component="li" variant="subtitle1" align="center">
                        Here we can go to our Current list
                        </Typography>
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant='outlined' color="primary" onClick={() => {history.push('/current')}}>
                        Current
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    )
}

export default UserPageForm;