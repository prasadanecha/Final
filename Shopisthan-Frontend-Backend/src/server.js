const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');


//routes



const userRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const addressRoutes = require('./routes/address');
const oderRoutes = require('./routes/order');
const wishListRoutes = require('./routes/wishlist');
const userinitialdata = require('./routes/userinitialdata');
const followRoutes = require('./routes/follow');

// environment variable 
env.config();

// mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@e-commcluster.m62kr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
 ).then(() => {
        console.log(`Database connected to ${process.env.MONGO_DB_DATABASE}`);
    });


app.use(cors());
app.use(express.json());

app.use('/api',userRoutes);
app.use('/api', cartRoutes);
app.use('/api', addressRoutes);
app.use('/api', oderRoutes);
app.use('/api', wishListRoutes);
app.use('/api',userinitialdata);
app.use('/api',followRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
