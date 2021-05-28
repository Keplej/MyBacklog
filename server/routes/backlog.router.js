const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT "game".id, "game".name, "game".description, "game".image_url FROM "game"
    JOIN "game_status" ON "game".status = "game_status".id 
    WHERE "game".user_id = ${req.user.id}
    AND "game".status = 2;`
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);    
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.delete('/:id/', (req, res) => {
    let queryText = `DELETE FROM "game" WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error => {
        console.log('unable to delete item', error);
        res.sendStatus(500);
    }))
})

module.exports = router;