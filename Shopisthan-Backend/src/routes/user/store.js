const express = require("express");
const { userData } = require("../../controller/user/store");
const router = express.Router();

router.post('/userdata',userData);
module.exports = router;

