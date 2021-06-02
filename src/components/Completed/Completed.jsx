import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

function Completed() {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

      const dispatch = useDispatch();
      const list = useSelector(store => store.completedlistReducer);
      const history = useHistory();
      // const user = useSelector(store => store.user);
      
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
        <div className="container">
            <h2>Completed Games</h2>
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
    )
}

export default Completed;