const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "game";`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('ERROR IN GAME STATUS', error);
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('Adding new game', req.body);
  const newGame = req.body;
  const user = req.user.id;
  
  let queryText = `INSERT INTO "game" ("name", "description", "image_url", "status", "user_id") VALUES ($1, $2, $3, $4, $5)
  RETURNING "id";`;
  pool.query(queryText, [newGame.name, newGame.description, newGame.url, newGame.status, req.user.id])
  .then((result) => {
      res.sendStatus(result.rows[0].id);

      const createdGameId = result.rows[0].id

      // const insertGameQuery = 
      // `INSERT INTO "game_status" ("name") 
      //  VALUES ($1);
      // `
    pool.query(insertGameQuery, [createdGameId, req.body.name])
    .then(result => {
      res.sendStatus(201);
    })
  }).catch((error) => {
      console.log('ERROR IN ADD GAME POST', error);
      res.sendStatus(500);
  })
});

module.exports = router;