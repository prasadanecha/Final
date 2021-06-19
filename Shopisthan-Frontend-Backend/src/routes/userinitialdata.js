const express = require('express');
const { userinitialData } = require('../controller/userinitialdata');
const router = express.Router();


router.post('/userinitialdata', userinitialData);

module.exports = router;
