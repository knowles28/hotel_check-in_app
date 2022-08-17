const express = require('express');
const {ObjectId} = require('mongodb')

const createRouter = function(collection) {

    const router = express.Router();

// * GET
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => {
            res.json(docs);
        })
        .catch((err) => {
            res.status(500);
            res.json({status: 500, error: err})
        });
    });

    router.post('/', (req, res) => {
        const newGuest = req.body;
        collection
        .insertOne(newGuest)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            res.status(500);
            res.json({status: 500, error: err})
        });
    
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({_id: ObjectId(id)})
        .then ((result) => res.json(result))
        .catch((err) => {
            res.status(500);
            res.json({status: 500, error: err})
        });
    })

    return router;

}
    
    
    module.exports = createRouter;


// * UPDATE


// * DELETE
