const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM game_status ORDER BY name;`;
    pool.query(queryText)
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }) .catch((error) => {
        console.log('ERROR on getting status', error);
        res.sendStatus(500);
    })
  });
  
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });
  
  module.exports = router;