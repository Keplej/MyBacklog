import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, Grid, Link, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import './UserPageCSS.scss';
// import Particles from "react-tsparticles";




const useStyles = makeStyles((theme) => ({
  buttonEdit: {
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(1),
      color: '#fff',
      fontSize: 6,
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

<section id="sec">
  <h2>Welcome to My Backlog {user.username}</h2>
  <ul>
    <li>
      <span class="fa fa-code"></span>
      <h3>Current</h3>
      <p>Our current games shows us all the current games that you are currently playing.</p>
      <br />
      <p>Click here see the current games that you are playing</p>
      <Button className={classes.buttonEdit} fullWidth variant='outlined' color="secondary" onClick={() => {history.push('/current')}}>Currently</Button>
    </li>
    <li><span class="fa fa-music"></span>
      <h3>Backlog</h3>
      <p>Our backlog games shows us all the backlog games that you are planning to play.</p>
      <br />
      <p>Click here to the games you currently have in your backlog</p>
      <Button className={classes.buttonEdit} fullWidth variant='outlined' color="secondary" onClick={() => {history.push('/backlog')}}>Backlog</Button>
    </li>
    <li><span class="fa fa-users"></span>
      <h3>Completed</h3>
      <p>Our completed games shows us all the completed games that you finished playing.</p>
      <br />
      <p>Click here to see all the games you have completed</p>
      <Button className={classes.buttonEdit} fullWidth variant='outlined' color="secondary" onClick={() => {history.push('/completed')}}>Completed</Button>
      </li>
  </ul>
</section>













      //   <React.Fragment>
      //   {/* <CssBaseline /> */}
      //   <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      //     <Toolbar className={classes.toolbar}>
      //       <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
      //           Welcome, {user.username}!
      //       </Typography>
      //     </Toolbar>
      //   </AppBar>
      //   <Container maxWidth="sm" component="main" className={classes.heroContent}>
      //     <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      //       My Backlog Profile {user.username}
      //     </Typography>
      //     <Typography variant="h5" align="center" color="textSecondary" component="p">
      //       This is your dashboard, Here we can navigate to your different lists {user.username}!
      //     </Typography>
      //   </Container>
      //   <Container  maxWidth="md" component="main" >
      //     <Grid container spacing={5} alignItems="flex-end" >
      //         <Grid md={4} sm={6}> 
      //           <Card className="card">
      //             <CardHeader
      //               title='Completed'
      //               titleTypographyProps={{ align: 'center' }}
      //               subheaderTypographyProps={{ align: 'center' }}
      //               className={classes.cardHeader}
      //             />
      //             <CardContent>
      //               <div className={classes.cardPricing}>
      //                 <Typography component="h2" variant="h3" color="textPrimary">
      //                 </Typography>
      //                 <Typography variant="h6" color="textSecondary">
      //                 </Typography>
      //               </div>
      //               <ul>
      //                   <Typography 
      //                   component="li" 
      //                   variant="subtitle1" 
      //                   align="center" > 
      //                   Here we can go to our Completed list
      //                   </Typography>
      //               </ul>
      //             </CardContent>
      //             <CardActions>
      //               <Button 
      //                   fullWidth variant='outlined'
      //                   color="primary"
      //                   onClick={() => {history.push('/completed')}}>
      //               Completed
      //               </Button>
      //             </CardActions>
      //           </Card>
      //         </Grid>
      //     </Grid>
      //   </Container>
      //   <Container maxWidth="md" component="main">
      //     <Grid container spacing={5} alignItems="flex-end">
      //         <Grid  xs={12} md={4}>
      //           <Card className="card">
      //             <CardHeader
      //               title='Backlog'
      //               titleTypographyProps={{ align: 'center' }}
      //               subheaderTypographyProps={{ align: 'center' }}
      //               className={classes.cardHeader}
      //             />
      //             <CardContent>
      //               <div className={classes.cardPricing}>
      //                 <Typography component="h2" variant="h3" color="textPrimary">
      //                 </Typography>
      //               </div>
      //               <ul>
      //                   <Typography component="li" variant="subtitle1" align="center">
      //                   Here we can go to our Backlog list
      //                   </Typography>
      //               </ul>
      //             </CardContent>
      //             <CardActions>
      //               <Button  
      //               color="primary"
      //               fullWidth variant='outlined' 
      //               onClick={() => {history.push('/backlog')}}>
      //                   Backlog
      //               </Button>
      //             </CardActions>
      //           </Card>
      //         </Grid>
      //     </Grid>
      //   </Container>
      //   <Container maxWidth="md" component="main">
      //     <Grid container spacing={5} alignItems="flex-end">
      //         <Grid i xs={12} sm={12} md={4}>
      //           <Card className="card">
      //             <CardHeader
      //               title="Current"
      //               titleTypographyProps={{ align: 'center' }}
      //               subheaderTypographyProps={{ align: 'center' }}
      //               className={classes.cardHeader}
      //             />
      //             <CardContent>
      //               <div className={classes.cardPricing}>
      //                 <Typography component="h2" variant="h3" color="textPrimary">
      //                 </Typography>
      //                 <Typography variant="h6" color="textSecondary">
      //                 </Typography>
      //               </div>
      //               <ul>
      //                   <Typography component="li" variant="subtitle1" align="center">
      //                   Here we can go to our Current list
      //                   </Typography>
      //               </ul>
      //             </CardContent>
      //             <CardActions>
      //               <Button fullWidth variant='outlined' color="primary" onClick={() => {history.push('/current')}}>
      //                   Current
      //               </Button>
      //             </CardActions>
      //           </Card>
      //         </Grid>
      //     </Grid>
      //   </Container>
      //   <Container maxWidth="md" component="footer" className={classes.footer}>
      //     <Grid container spacing={4} justify="space-evenly">
      //       {footers.map((footer) => (
      //         <Grid item xs={6} sm={3} key={footer.title}>
      //           <Typography variant="h6" color="textPrimary" gutterBottom>
      //             {footer.title}
      //           </Typography>
      //           <ul>
      //             {footer.description.map((item) => (
      //               <li key={item}>
      //                 <Link href="#" variant="subtitle1" color="textSecondary">
      //                   {item}
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //         </Grid>
      //       ))}
      //     </Grid>
      //   </Container>
      // </React.Fragment>
    )
}

export default UserPageForm;