const express = require('express');
const { signin, signup } = require('../../controller/user/auth');
const { validateSigninRequest, validateSignupRequest, isRequestVaildated } = require('../../validators/auth');
const router = express.Router();

router.post('/user/signin',validateSigninRequest,isRequestVaildated,signin);
router.post('/user/signup',validateSignupRequest,isRequestVaildated,signup);

module.exports = router;
