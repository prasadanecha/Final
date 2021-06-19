const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const shopSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    shopName:{
      type: String,
      required: true
  
      },
      shopType:{
          type: String,
          required: true,
          trim: true,
      },
      shopEmail:{
          type: String,
          required: true,
          trim: true,
          unique: true,
      },
    //   hash_password:{
    //       type: String,
    //       required: true
    //   },
    password:{
        type: String,
        required: true
    },

  followers:[{
    type: mongoose.Schema.Types.ObjectId,ref: 'User'
  }], 
    storeProfilePicture: {
          img: { type: String }
      },
      storeBackgroundPicture: {
        img: { type: String }
    },
      shopCategory:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
          
      },
      shopLocation:{
        type: mongoose.Schema.Types.ObjectId, ref: 'StoreLocation', required: true
          
      },
      shopPhoneNo:{
          type: Number,
          trim: true,
          required: true
      },
      shopAddress:{
        type: String,
        trim: true,
        required: true
        
    },
    shopDes:{
      type: String,
      default: 'N.A'
      
  },
    role:{
        type: String,
        default: 'store'
    },

      shopPofilePicture: {type: String},
      time:{
        type: String
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true

    },
  
  },{timestamps: true});



// shopSchema.virtual('password')
// .set(function(password){
//    this.hash_password = bcrypt.hashSync(password, 12);
// });

// shopSchema.pre('save',async function(next){
//     if(this.isModified('password')){
//         this.password = bcrypt.hash(this.password,12)
//     }
//     next();
// })

// shopSchema.virtual('password')
// .set(function(password){
//    this.hash_password = bcrypt.genSalt(10,(err,salt)=>{
//        if(err){
//            console.log('sever error');
//        }else{
//         bcrypt.hash(password,salt,(err,hash)=>{
//             if(err){
                
//             }
//         })
//        }
//    })
// });



// shopSchema.methods = {
//     authenticate : function(password){
//         return bcrypt.compareSync(password, this.hash_password);
//     }
// }

module.exports = mongoose.model('Store',shopSchema);