const express = require('express');
const router = express.Router();

//To undesrtand => sintax : console.log(materials.map(material => material.length));
router.get('/', (req, res, next) => {
    res.send('Hi')
});

module.exports = router;