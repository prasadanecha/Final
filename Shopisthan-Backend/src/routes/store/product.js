const express = require('express')
//const Category = require('../models/category')
const router = express.Router();
const slugify = require('slugify');
const multer = require('multer')
const path = require('path')
const shortid = require('shortid')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join (path.dirname(__dirname),"uploads"))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate()+'-'+file.originalname)
    }
  })
   
  var upload = multer({  storage })

// const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware, requireStoreSignin, storeMiddleware, requireAdminSignin } = require('../../common-middleware');
const { createProduct, getProductBySlug, getProductDetailsById, deleteProductById } = require('../../controller/store/product');


router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPictures'),createProduct)
// router.get('/category/getcategory',getCategories)
router.get('/products/:slug',getProductBySlug)
router.get("/product/:productId", getProductDetailsById);

// router.delete('/product/deleteProductById',requireAdminSignin,adminMiddleware,deleteProductById
  
// );

router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPictures'),createProduct)
// router.get('/category/getcategory',getCategories)
router.get('/products/:slug',getProductBySlug)
router.get("/product/:productId", getProductDetailsById);

module.exports = router;