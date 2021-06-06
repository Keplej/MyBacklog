import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Container, CssBaseline, Grid, Link, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import './UserPageCSS.scss';





const useStyles = makeStyles((theme) => ({
  buttonEdit: {
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(1),
      color: '#fff',
      fontSize: 6,
    },
}));


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
    )
}

export default UserPageForm;