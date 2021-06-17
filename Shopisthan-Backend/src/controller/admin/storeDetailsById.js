const product = require("../../models/store/product");
const store = require("../../models/store/store");

exports.getStoreDetailsById = async(req, res) => {
    const { storeId } = req.params;
    if (storeId) {
       const storeDetails = await store.findOne({ _id: storeId })
                            .select("-password")
                            .populate("shopCategory", "_id name")
                            .exec();
       const storeProducts = await product.find({createdBy:storeId})
                            .select('_id name price quantity slug description productPictures category ParCategory createdBy')
                            .populate({path: 'category', select: '_id name'})
                            .populate({path: 'ParCategory', select: '_id name'})
                            .exec();
       res.status(201).json({storeDetails,storeProducts})

        }else{
      return res.status(400).json({ error: "Params required" });
    }
  };
  

  
// exports.getStoreDetailsById = (req, res) => {
//   const { storeId } = req.params;
//   if (storeId) {
//     store.findOne({ _id: storeId })
//     .select("-password")
//     .populate("shopCategory", "_id name")
//     .lean()
//     .exec((error, store) => {
//       if (error) return res.status(400).json({ error });
//       if (store) {
//       product.find({createdBy:storeId})
//       .exec((error, storeDetails) => {
//           if (error) return res.status(400).json({ error });
//           order.address = address.address.find(
//             (adr) => adr._id.toString() == order.addressId.toString()
//           );
//           res.status(200).json({
//             order,
          
//           });
//         });

//       }
//     });
//   } else {
//     return res.status(400).json({ error: "Params required" });
//   }
// };
