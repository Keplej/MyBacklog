const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
//  `SELECT "game".id, "game".name, "game".description, "game".image_url FROM "game"
//  JOIN "game_status" ON "game".status = "game_status".id 
//  WHERE "game".user_id = ${req.user.id}
//  AND "game".status = 2;`



router.get('/', (req, res) => {
    let queryText =  
    // `SELECT * FROM "game" WHERE "game".status=2 AND "game".user_id=${req.user.id};`
    `SELECT "game".id, "game".name, "game".description, "game".image_url FROM "game"
    JOIN "game_status" ON "game".status = "game_status".id 
    WHERE "game".user_id = ${req.user.id}
    AND "game".status = 2;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);    
    })
});



// router.get('/:id', (req, res) => {
//     // const details = req.params.id;
//     let queryText =  `SELECT id, name, description FROM "game" WHERE id=$1;`;
//     pool.query(queryText, [req.params.id])
//     .then((result) => {
//         res.send(result.rows[0]);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);    
//     })
// });


// router.put('/:id', (req,res) => {
//     console.log('Checking put, id=', req.params.id, 'body=', req.body);
//     const queryText = `UPDATE "game" SET name=$2, description=$3 WHERE "id" = $1;`;
//     pool.query(queryText, [req.body.name, req.body.description, req.params.id])
//     .then(result => {
//         res.sendStatus(201);
//     })
//     .catch(error => {
//         console.log(`Error in updating game`, error);
//         res.sendStatus(500);
//     })
// })

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