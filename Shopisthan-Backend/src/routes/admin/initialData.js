const express = require('express');
const { requireSignin, adminMiddleware, requireAdminSignin } = require('../../common-middleware');
const { initialData } = require('../../controller/admin/initialData');
const router = express.Router();


router.post('/initialdata',requireAdminSignin,adminMiddleware ,initialData);

module.exports = router;
