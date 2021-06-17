const category = require("../../models/admin/category");
const product = require("../../models/store/product");
const store = require("../../models/store/store");
const order = require("../../models/user/order");




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
            type: cate.type,
            children: createCategories(categories, cate._id)
        });
    }

    return categoryList;
};


exports.userData = async (req, res) => {
    const categories = await category.find({}).exec();
    const orders = await order.find({})
    .populate("items.productId","name")
    .exec();
    const stores = await store.find({})
    .select('_id userName shopName shopType shopEmail shopCategory shopPhoneNo shopAddress createdBy')
    .populate({path: 'shopCategory', select: '_id name'})
    .populate({path:'createdBy',select: '_id username'})
    .exec();
    const products = await product.find({})
        .select('_id name price quantity slug description productPictures category createdBy')
        .populate({path: 'category', select: '_id name'})
        .populate({path:'createdBy',select: '_id shopName'})
        .exec();
    res.status(200).json({
        categories:createCategories(categories),
        products,
        stores,
        orders
    })
}

