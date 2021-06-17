const express = require('express');
const { requireSignin, adminMiddleware, requireAdminSignin, uploadS3 } = require('../common-middleware');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controller/admin/category');

const router = express.Router();

const path = require('path')
// const shortid = require('shortid')
// const multer = require('multer')
// const multer = require('multer')
const shortid = require('shortid')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'upload'))

      // cb(null,path.join(__dirname,'../../'),'upload')
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate()+'-'+file.originalname)
    }
  })

  var upload = multer({  storage })




router.post('/category/create',requireAdminSignin,adminMiddleware,
uploadS3.single('categoryIcon'),
addCategory)
router.get('/category/getcategory',getCategories)
router.post('/category/update',
upload.single('categoryImage'),
updateCategories)
router.post('/category/delete',deleteCategories);

module.exports = router;