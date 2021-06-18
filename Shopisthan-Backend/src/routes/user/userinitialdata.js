const express = require('express');
const { requireSignin, adminMiddleware, requireAdminSignin } = require('../../common-middleware');
const { userinitialData } = require('../../controller/user/userinitialdata');
const router = express.Router();


router.post('/userinitialdata', userinitialData);

module.exports = router;
