const Category = require('../../models/admin/category');
const Product = require('../../models/store/product');
const store = require('../../models/store/store');
const Address = require('../../models/user/address');
const order = require('../../models/user/order');
const StoreLocation = require('../../models/admin/location')


function createCategories(categories, parentId = null) {

    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    } else {
        category = categories.filter(cat => cat.parentId == parentId);

    }
    for (let cate of category) {
        categoryList.push({
            _id: cate.id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            categoryIcon:cate.categoryIcon,
            // type: cate.type,
            children: createCategories(categories, cate._id)
        });
    }

    return categoryList;
};


exports.userinitialData = async (req, res) => {
    const categories = await Category.find({}).exec();
    const locations = await StoreLocation.find({}).exec();

    const stores = await store.find({})
    .select('_id userName shopName shopType shopEmail shopCategory shopPhoneNo shopAddress createdBy createdAt shopLocation')
    .populate({path: 'shopCategory', select: '_id name'})
    .populate({path:'createdBy',select: '_id username'})
    .populate({path:'shopLocation',select: '_id name'})
    .exec();
    const products = await Product.find({})
        .select('_id name price quantity slug description productPictures category createdBy outOfStock')
        .populate({path: 'category', select: '_id name'})
        .populate({path:'createdBy',select: '_id shopName'})
        .exec();
    res.status(200).json({
        categories:createCategories(categories),
        products,
        stores,
        locations
    })
}

