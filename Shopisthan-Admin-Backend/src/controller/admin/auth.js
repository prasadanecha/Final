
const Admin = require('../../models/admin/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Store = require('../../models/store/store')
const StoreLocation = require('../../models/admin/location')

//

const Category = require('../../models/admin/category');
const Product = require('../../models/store/product');
const store = require('../../models/store/store');
const Address = require('../../models/user/address');
const order = require('../../models/user/order');


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


exports.signup = (req, res) => {

    Admin.findOne({ email: req.body.email })
        .exec(async (error, admin) => {

            if (admin) return res.status(400).json({
                message: "Admin already registered"
            });
               
            // Store.findOne({shopEmail:req.body.email})
            // .exec((error,store)=>{
            //     if(error)
            //     {
            //      return res.status(400).json({error})
            //     }
            //     if(store) return res.status(400).json({
            //         message: "Email already registered"
            //      });
            // })
            let store = await Store.findOne({shopEmail: req.body.email})
            if(store){
                return res.status(400).json({message:"Email already Exists"})
            }
    

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            // const hash_password = await bcrypt.hash(password, 10);
        
            const _admin = new Admin({
                firstName,
                lastName,
                email,
                password,
                username: firstName+lastName,
                role: 'admin'
            });
             const salt = await bcrypt.genSalt(10);
            _admin.password = await bcrypt.hash(password,salt);
            _admin.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        error
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: "Admin created Successfully...!"
                    })
                }
            })
        });
}



// exports.signin = (req, res) => {
//     Admin.findOne({ email: req.body.email })
//         .exec((error, admin) => {
//             if (error) return res.status(400).json({ error })
//             if (admin) {

//                 if (admin.authenticate(req.body.password) && admin.role === 'admin') {
//                     const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET);
//                     const { _id, firstName, lastName, email, role, fullName } = admin;
//                     res.cookie('token', token);
//                     res.status(200).json({
//                         token,
//                         admin: {
//                             _id, firstName, lastName, email, role, fullName
//                         }
//                     })
//                 } else {
//                     return res.status(400).json({
//                         message: "Invalid Password"
//                     })
//                 }
//             }
//             else {
//                 return res.status(400).json({ message: "Something went worng" })
//             }
//         })
// }



exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: 'SignOut Successfully...!'
    })
}



exports.signin = async(req,res)=>{

    const {email,password} = req.body;
    try{
        let store = await Store.findOne({shopEmail:email})
        if(!store){

            let admin = await Admin.findOne({email:email})
            if(admin){
              
                const admincheckpassword = await bcrypt.compare(password,admin.password);
                if (admincheckpassword && admin.role === 'admin') {
                    const token = jwt.sign({ _id: admin._id, role: admin.role }, process.env.JWT_SECRET);
                    const { _id, firstName, lastName, email, role, fullName } = admin;
                    res.cookie('token', token);

                    const categories = await Category.find({}).exec();
                    const orders = await order.find({})
                    .populate("items.productId","name")
                    .exec();
                
                    const locations = await StoreLocation.find({}).exec();
                    const stores = await Store.find({})
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
                    return res.status(200).json({
                        token,
                        admin: {
                            _id, firstName, lastName, email, role, fullName
                        },
                        categories:createCategories(categories),
                        products,
                        stores,
                        orders,
                        locations

                    })
                } else {
                    return res.status(400).json({
                        message: "Invalid Password"
                    })
                }
            }

            return res.status(400).json({message:"Email not vaild"})
        }

        const checkpassword = await bcrypt.compare(password,store.password);
        if(!checkpassword){
            return res.status(400).json({message:"Invaild password"})
        }
        const token = jwt.sign({ _id: store._id, role: store.role}, process.env.JWT_SECRET );


         store = await Store.findOne({shopEmail:email})
         .populate("shopCategory","name _id")
         .select("-password")
         .exec();
         const categories = await Category.find({}).exec();
   
         const products = await Product.find({createdBy:store._id})
             .select('_id name price quantity slug description productPictures category ParCategory createdBy outOfStock')
             .populate({path: 'category', select: '_id name'})
             .populate({path: 'ParCategory', select: '_id name'})
             .exec();
             const orders = await order.find({
                 items: {
                   $elemMatch: {
                     storeId:store._id
                   }
                 } 
               })
               .populate("items.productId","name")
               .exec();
        res.status(200).json({
                        token,
                        store,
                        categories,
                        products,
                        orders
                    })

    }catch(err){
        return res.status(400).json({error:err})
    
    }
}





// exports.initialData = async (req, res) => {
//     const categories = await Category.find({}).exec();
//     const orders = await order.find({})
//     .populate("items.productId","name")
//     .exec();

     
//     const stores = await store.find({})
//     .select('_id userName shopName shopType shopEmail shopCategory shopPhoneNo shopAddress createdBy createdAt')
//     .populate({path: 'shopCategory', select: '_id name'})
//     .populate({path:'createdBy',select: '_id username'})
//     .exec();
//     const products = await Product.find({})
//         .select('_id name price quantity slug description productPictures category createdBy')
//         .populate({path: 'category', select: '_id name'})
//         .populate({path:'createdBy',select: '_id shopName'})
//         .exec();
//     res.status(200).json({
//         categories:createCategories(categories),
//         products,
//         stores,
//         orders
//     })
// }

