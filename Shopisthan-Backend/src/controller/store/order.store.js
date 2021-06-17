// const order = require("../../models/user/order")

// exports.storeOrders = async(req,res)=>{

//     // const storeOrders = await order.find({})
//     // // .select('items')
//     // .exec((error,orders)=>{
//     //     if(error) return res.status(400).json({ error });
//     //     if(orders){
//     //         res.status(200).json({ 
//     //             //  orders,
//     //             //  storeId:req.store._id,
//     //         //   store:orders.filter((product) => product.totalAmount === 24789)
//     //          });
//     //     }
//     // });


//     const orders = await order.find({
//             items: {
//               $elemMatch: {
//                 storeId:req.store._id
//               }
//             } 
//           })
//           .populate("items.productId","name")
//           .exec((error,orders)=>{
//                 if(error) return res.status(400).json({ error });
//                 if(orders){
//                     res.status(200).json({ 
//                          orders
          
//                      });
//                 }
//             });
        

   
//     // {
//         //     category.categories.filter(category => category.parentId === storeCategory )
//         //     .map(filterCategory =>(
//         //         <option key={filterCategory._id} value={filterCategory._id}>{filterCategory.name}</option>
//         //     ))
//         //  }



//     // const productid = "60715db9195b4c505cfb53b0"
//     // const orders = await Order.find({"items.productId.createdBy":req.user._id})
//     //  const orders = await Order.find({_id:'60903ec2dd184b04dcef07b0'})

//     // db.collection.find({
//     //     arrayfield: {
//     //       $elemMatch: {
//     //         id: ObjectId("5eaaeedd00101108e1123461")
//     //       }
//     //     }
//     //   }

//     //  .populate("items.productId","name createdBy")
//     // const orders = await Order.find({
//     //     items: {
//     //       $elemMatch: {
//     //         _id: '60903ec2dd184b04dcef07b1'
//     //       }
//     //     } 
//     //   })
//     // // const orders = await Order.find({})
//     // .populate("items.productId","name createdBy")
//     // .exec();
//     // res.status(200).json({orders});
// }
// // {
// //     category.categories.filter(category => category.parentId === storeCategory )
// //     .map(filterCategory =>(
// //         <option key={filterCategory._id} value={filterCategory._id}>{filterCategory.name}</option>
// //     ))
// //  }