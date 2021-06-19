const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();
const Store = require('../models/store')
const User = require('../models/auth')


router.put(`/follow`,requireSignin,userMiddleware,(req,res)=>{
    Store.findByIdAndUpdate(req.body.followId,{
        $push:{followers: req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){ 
            return res.status(422).json({error:err})
        }
        
       User.findByIdAndUpdate(req.user._id,{
            $push:{following:req.body.followId}
        },{new:true})
        .select("-hash_password")
        .then(following=>{
             return   res.status(201).json(following)
        }).catch(err=>{
            return res.status(422).json({error:err})
        })

    }
  

    )
    
})


router.put(`/unfollow`,requireSignin,userMiddleware,(req,res)=>{
    Store.findByIdAndUpdate(req.body.unfollowId,{
        $pull:{followers: req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){ 
            return res.status(422).json({error:err})
        }
        
        User.findByIdAndUpdate(req.user._id,{
            $pull:{following:req.body.unfollowId}
        },{new:true}).select("-hash_password").then(result=>{
            res.json(result)
        }).catch(err=>{
            return res.status(422).json({error:err})
        })
    }
  

    )
    
})


module.exports = router;
