const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
const bcrypt = require('bcrypt')
const adminSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName:{
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20
      },
      username:{
          type: String,
          required: true,
          trim: true,
          unique: true,
          index: true,
          lowercase: true
      },
      email:{
          type: String,
          required: true,
          trim: true,
          unique: true,
          lowercase: true
      },
      password:{
        type: String,
        required: true
    },
      role:{
          type: String,
          enum: ['admin','sub-admin'],
          default: 'admin'
      },
      contactNumber:{type: String},
      pofilePicture: {type: String}
  
  },{timestamps: true});

adminSchema.virtual('fullName')
.get(function(){
       return `${this.firstName} ${this.lastName}`;
});



// adminSchema.virtual('password')
// .set(function(password){
//    this.hash_password = bcrypt.hashSync(password, 10);
// });



// adminSchema.methods = {
//     authenticate : function(password){
//         return bcrypt.compareSync(password, this.hash_password);
//     }
// }

module.exports = mongoose.model('Admin',adminSchema);