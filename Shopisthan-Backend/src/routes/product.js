const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const shortid = require('shortid');

const { requireStoreSignin, storeMiddleware, uploadS3 } = require('../common-middleware');
const { createProduct, getProductBySlug, getProductDetailsById, deleteProductById, editProduct } = require('../controller/store/product');


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(path.dirname(__dirname),"upload"))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
})

var upload = multer({storage})

// router.post('/product/create',requireStoreSignin,storeMiddleware,upload.array('productPictures'),createProduct);
router.post('/product/create',requireStoreSignin,storeMiddleware,uploadS3.array('productPictures'),createProduct);

router.get('/products/:slug',getProductBySlug)
router.get("/product/:productId", getProductDetailsById);
router.delete('/product/deleteProductById',requireStoreSignin,storeMiddleware,deleteProductById);
router.post('/editProduct',requireStoreSignin,storeMiddleware,editProduct);


module.exports = router;