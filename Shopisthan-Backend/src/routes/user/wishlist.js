const express = require("express");
const router = express.Router();
const { requireSignin, userMiddleware } = require("../../common-middleware");
const { addItemToWishList, getWishlistItems } = require("../../controller/user/wishlist");

router.post("/user/wishlist/addtowishlist", requireSignin, userMiddleware , addItemToWishList);
router.post("/user/getCartItems", requireSignin, userMiddleware, getWishlistItems);

module.exports = router;
    