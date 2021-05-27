const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "game_status" ORDER BY "name"`;
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
  let queryText = `INSERT INTO "game" ("name", "description", "image_url", "status", "user_id") VALUES ($1, $2, $3, $4, $5) 
  RETURNING "id";`;
  pool.query(queryText, [req.body.name, req.body.description, req.body.url, req.body.status, req.body.user_id])
  .then((result) => {
      res.sendStatus(201);
  }).catch((error) => {
      console.log('ERROR IN ADD GAME POST', error);
      res.sendStatus(500);
  })
});

module.exports = router;