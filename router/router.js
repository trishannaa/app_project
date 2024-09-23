const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.post('/save', main.create );

module.exports = router;