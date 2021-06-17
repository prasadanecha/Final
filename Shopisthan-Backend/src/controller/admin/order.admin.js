const order = require('../../models/user/order');
const Order =require('../../models/user/order');
const Address = require('../../models/user/address')
exports.updateOrder = (req,res)=>{
    Order.updateOne(
        {
            _id:req.body.orderId, "orderStatus.type": req.body.type
        },
        {
            $set:{
                "orderStatus.$": [{ type:req.body.type, date: new Date(), isCompleted: true}],
            },
        }
    ).exec((error, order)=>{
        if(error) return res.status(400).json({error});
        if(order){
            res.status(201).json({order});
        }
    });
};


//  exports.storeOrders = async(req,res)=>{


//     // const productid = "60715db9195b4c505cfb53b0"
//     // const orders = await Order.find({"items.productId.createdBy":req.user._id})
//     //  const orders = await Order.find({_id:'60903ec2dd184b04dcef07b0'})

//     // db.collection.find({
//     //     arrayfield: {
//     //       $elemMatch: {
//     //         id: ObjectId("5eaaeedd00101108e1123461")
//     //       }
//     //     }
//     //   })

//     //  .populate("items.productId","name createdBy")
//     const orders = await Order.find({
//         items: {
//           $elemMatch: {
//             _id: '60903ec2dd184b04dcef07b1'
//           }
//         } 
//       })
//     // const orders = await Order.find({})
//     .populate("items.productId","name createdBy")
//     .exec();
//     res.status(200).json({orders});
// }
 

exports.getCustomerOrders = async(req,res) =>{
    const orders = await Order.find({})
    .populate("items.productId","name")
    .exec();
    res.status(200).json({orders});

  //  const orders = await order.find({})
  //     .populate("items.productId", "_id name productPictures")
  //     .populate("items.storeId", "_id shopName shopEmail shopPhoneNo shopAddress")
  //     .lean()
  //     .exec((error, order) => {
  //       if (error) return res.status(400).json({ error });
  //       if (order) {
  //       Address.findOne({
  //           user: order.user,
  //         }).exec((error, address) => {
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
}

// exports.getOrder = (req, res) => {
//     Order.findOne({ _id: req.body.orderId })
//       .populate("items.productId", "_id name productPictures")
//       .lean()
//       .exec((error, order) => {
//         if (error) return res.status(400).json({ error });
//         if (order) {
          
//           res.status(200).json({
//                   order,
//                 });

//         //   Address.findOne({
//         //     user: req.user._id,
//         //   }).exec((error, address) => {
//         //     if (error) return res.status(400).json({ error });
//         //     order.address = address.address.find(
//         //       (adr) => adr._id.toString() == order.addressId.toString()
//         //     );
//         //     res.status(200).json({
//         //       order,
//         //     });
//         //   });
//         }
//       });
//   };

//   exports.getOrders = (req, res) => {
//     Order.find({ user: req.user._id })
//       .select("_id paymentStatus paymentType orderStatus items")
//       .populate("items.productId", "_id name productPictures")
//       .exec((error, orders) => {
//         if (error) return res.status(400).json({ error });
//         if (orders) {
//           res.status(200).json({ orders });
//         }
//       });
//   };




exports.getOrderDetailsById = (req, res) => {
    const { orderId } = req.params;
    if (orderId) {
      order.findOne({ _id: orderId })
      .populate("items.productId", "_id name productPictures")
      .populate("items.storeId", "_id shopName shopEmail shopPhoneNo shopAddress")
      .lean()
      .exec((error, order) => {
        if (error) return res.status(400).json({ error });
        if (order) {
        Address.findOne({
            user: order.user,
          }).exec((error, address) => {
            if (error) return res.status(400).json({ error });
            order.address = address.address.find(
              (adr) => adr._id.toString() == order.addressId.toString()
            );
            res.status(200).json({
              order,
            
            });
          });

        }
      });
    } else {
      return res.status(400).json({ error: "Params required" });
    }
  };
  