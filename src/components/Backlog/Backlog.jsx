import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'
// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });



function Backlog() {

  const dispatch = useDispatch();
  const list = useSelector(store => store.backloglistReducer);
  // const user = useSelector(store => store.user);
  // const classes = useStyles();
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
    // <div className="container">
    //     <h2>Your Backlog</h2>
    //     <p>Testing to all items from db</p>
    //     <section>
    //       <Card
    //       //  className={classes.root}
    //        >
    //       {list.map((backlog, i) => {
    //         return(
    //           <CardContent item key={backlog.id}>
    //             <Typography className={classes.title} color="textSecondary" gutterBottom>{backlog.name}</Typography>
    //             <Typography variant="body2" component="p">{backlog.description}</Typography>
    //             <Button variant="contained" color="secondary" 
    //             value={backlog.id} onClick={(event) => handleDelete(backlog.id)}>Delete</Button>
    //             <Button color="primary">Currently Playing</Button>
    //             <Button>Edit</Button>
    //         </CardContent>
    //         )
    //       })}
    //     </Card>
    //   </section>
    // </div>

    <div>
      <form>
        {list.map((lists, i) => {
          return(
          <li key={i}>
            <ul>{lists.name}</ul>
            <ul>{lists.description}</ul>
            <button onClick={(event) => viewDetails(event, lists)}>View</button>
            <button value={lists.id} onClick={(event) => handleDelete(lists.id)}>Delete</button>
          </li>
          )
        })}
      </form>
    </div>
  );
}

export default Backlog;
