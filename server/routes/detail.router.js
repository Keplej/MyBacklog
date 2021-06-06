const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/:id', rejectUnauthenticated, (req, res) => {
    // const details = req.params.id;
    let queryText =  `SELECT id, name, description, status, image_url FROM "game" WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows[0]);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);    
    })
});

router.put('/:id', (req,res) => {
    console.log('Checking put, id=', req.params.id, 'body=', req.body);
    const queryText = `UPDATE "game" SET name=$1, description=$2, status=$3, image_url=$4 WHERE "id" = $5;`;
    pool.query(queryText, [req.body.name, req.body.description, req.body.status, req.body.image_url, req.params.id])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error in updating game`, error);
        res.sendStatus(500);
    })
})
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;