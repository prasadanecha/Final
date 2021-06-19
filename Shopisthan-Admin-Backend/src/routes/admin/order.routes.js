const express = require("express");
const { requireSignin, adminMiddleware, requireAdminSignin } = require("../../common-middleware");
const { updateOrder, getCustomerOrders, storeOrders, getOrderDetailsById } = require("../../controller/admin/order.admin");
const router = express.Router();


router.post(`/order/update`, requireAdminSignin,adminMiddleware,updateOrder)
router.post(
    `/order/getCustomerOrders`,
    requireAdminSignin,
    adminMiddleware,
    getCustomerOrders
  );

router.get(`/order/:orderId`,requireAdminSignin,adminMiddleware,getOrderDetailsById)

module.exports = router;