import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is



function CurrentlyPlaying() {

  const dispatch = useDispatch();
  const list = useSelector(store => store.currentlistReducer.data);
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({type: 'GET_GAMES'});
  }, []);

  return (
    <div className="container">
      <h2>Currently Playing</h2>
      <p>Testing to all items from db</p>
      {list ? <ul>
        {list.map((game) => {
          <div key={game.id}>
            <li>{game.name}</li>
            <li>{game.description}</li>
            {(game && game.user_id === user.id)}
          </div>
        })}
      </ul> : ''}
    </div>
  );
}

export default CurrentlyPlaying;
