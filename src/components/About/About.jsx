import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ParticleBackground from '../ParticlesConfig/ParticleBackground';
import { ListItem, Paper, Typography, List } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(15),
      },
    },
  }));



function About() {
    const classes = useStyles();

    return (
        <div>
            <ParticleBackground />
            <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
          Thank you for viewing my project.
          </Typography>
          <React.Fragment>
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                </Typography>
                <br />
                <Typography variant="h5" align="center">
                    This app was built with:
                </Typography>
                <br />
                <Typography align="center" variant="subtitle1" gutterBottom>React</Typography>
                <Typography align="center" variant="subtitle1" gutterBottom>Redux</Typography> 
                <Typography align="center" variant="subtitle1" gutterBottom>Material-Ui</Typography> 
                <Typography align="center" variant="subtitle1" gutterBottom>Sass</Typography> 
                <Typography align="center" variant="subtitle1" gutterBottom>React Particles JS</Typography>
                <Typography align="center" variant="subtitle1" gutterBottom>Styled Components</Typography> 
                <Typography align="center" variant="subtitle1" gutterBottom>Express</Typography>
              </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </div>
    )
}

export default About;
