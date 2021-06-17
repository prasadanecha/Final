const Product = require("../../models/store/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../../models/admin/category");


exports.createProduct = (req, res) => {

    const {
        name, price, description, category, quantity, createdBy,ParCategory
    } = req.body;   

    let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.location  };
    });
  }
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        productPictures,
        description,
        category,
        createdBy: req.store._id,
        ParCategory

    });

    product.save(((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            res.status(201).json({ product, files: req.files });
        }
    }));

}

exports.getProductBySlug = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id type createdBy")
    .populate({path:'createdBy',select: '_id username'})
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (category) {
        Product.find({ category: category._id }).exec((error, products) => {
          if (error) {
            return res.status(400).json({ error });
          }

          if (category.type) {
            if (products.length > 0) {
              res.status(200).json({
                products,
                priceRange: {
                  under5k: 5000,
                  under10k: 10000,
                  under15k: 15000,
                  under20k: 20000,
                  under30k: 30000,
                },
                productsByPrice: {
                  under5k: products.filter((product) => product.price <= 5000),
                  under10k: products.filter(
                    (product) => product.price > 5000 && product.price <= 10000
                  ),
                  under15k: products.filter(
                    (product) => product.price > 10000 && product.price <= 15000
                  ),
                  under20k: products.filter(
                    (product) => product.price > 15000 && product.price <= 20000
                  ),
                  under30k: products.filter(
                    (product) => product.price > 20000 && product.price <= 30000
                  ),
                },
              });
            }
          } else {
            res.status(200).json({ products });
          }
        });
      }
    });
};

  exports.getProductDetailsById = (req, res) => {
    const { productId } = req.params;
    if (productId) {
      Product.findOne({ _id: productId }).exec((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
          res.status(200).json({ product });
        }
      });
    } else {
      return res.status(400).json({ error: "Params required" });
    }
  };
 

exports.editProduct = async(req,res)=>{
    const {
      name, price, description, quantity,_id
     } = req.body;  

     const updatedProduct = await Product.findOneAndUpdate({_id:_id},{$set:{name, price, description, quantity}},
        {new:true,useFindAndModify: false},
        (err,updatedProductInfo)=>{
            if(err) {
                 return res.status(400).json({err});
            }
            if(updatedProductInfo){
                // const store = Store.findOne({_id:req.store._id})
                // .populate("shopCategory","name _id")
                // .select("-password")
                // .exec((err,storeInfo)=>{
                //     if(err)    return res.status(400).json({err});
                //     if(storeInfo){
                //         return res.status(201).json({storeInfo});
                //     }
                // });
                return res.status(201).json({updatedProductInfo});
            }

        })
    
}



  
exports.deleteProductById = (req, res) => {
  const { productId } = req.body.payload;
  if (productId) {
    Product.deleteOne({ _id: productId }).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(400).json({ error: "Params required" });
  }


};


