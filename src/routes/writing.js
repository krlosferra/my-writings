const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');

const db = mongojs('writing-db', ['writings']);

router.get('/writing', (req, res, next) => {
    db.writings.find( (err, writings) => {
        if(err) return next(err);
        res.json(writings);
    }) 
});

router.get('/writing/:id', (req, res, next) => {
    db.writings.findOne( {_id: req.params.id}, (err, writing) => {
        if(err) return next(err);
        res.json(writing);
    }) 
});

router.post('/writing', (req, res, next) => {
    const writing = req.body;
    if(!writing.title || !writing.text){
        res.status(400).json({
            error: 'Bad Data'
        });
    } else{
        db.writings.save(writing, (err, writing) => {
            if(err) return next(err);
            res.json(writing);
        })
    }
});

// Delete Writing
router.delete('/writings/:id', (req, res, next) => {
    db.writings.remove({_id: mongojs.ObjectId(req.params.id)}, (err, writing) => {
        if(err){ res.send(err); }
        res.json(writing);
    });
})

// Update Writing
router.put('/writings/:id', (req, res, next) => {
    const writing = req.body;
    let updateWriting = {};
    
    if(writing.text) {
        updateWriting.isDone = writing.text;
    }
    if(writing.title) {
        updateWriting.title = writing.title;
    }
    if(!updateWriting) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.writings.update({_id: mongojs.ObjectId(req.params.id)}, updateWriting, {}, (err, writing) => {
            if (err) return next(err);
            res.json(writing);
        });
    }
});

router.get('/lastWriting', (req, res, next) => {
    db.writings.find((err, writings) => {
        if(err) return next(err);
        res.json(writings);
    }).sort({_id:-1}).limit(1);
});

module.exports = router;

//Functions not included in routes

module.exports.getLastWriting = function last(n) {
    return db.collection.find().skip(db.collection.count() - n);
}