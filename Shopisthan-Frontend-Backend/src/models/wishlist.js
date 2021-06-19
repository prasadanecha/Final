const mongoose = require (  'mongoose' );
const wishListSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    wishlist: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, defualt: 1 },
            // price: { type: Number, required: true }
        }
    ]    

}
,{timestamps: true}
);

module.exports = mongoose.model('Wishlist', wishListSchema);