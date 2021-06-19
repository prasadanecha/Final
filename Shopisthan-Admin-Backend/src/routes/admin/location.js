const express = require("express");
const { adminMiddleware, requireAdminSignin } = require("../../common-middleware");
const { addLocation } = require("../../controller/admin/location");



const router = express.Router();


router.post(`/addloaction`, requireAdminSignin,adminMiddleware,addLocation)


module.exports = router;