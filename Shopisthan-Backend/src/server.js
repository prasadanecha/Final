const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//routes
const adminRoutes = require('./routes/admin/auth');
const storeRoutes = require('./routes/store/store');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product');
const initialDataRoutes = require('./routes/admin/initialData')
const userRoutes = require('./routes/user/auth');
const cartRoutes = require('./routes/user/cart');
const addressRoutes = require('./routes/user/address');
const oderRoutes = require('./routes/user/order');
const wishListRoutes = require('./routes/user/wishlist');
const adminOrdersRoutes = require('./routes/admin/order.routes');
const storeDetailsById = require('./routes/admin/storeDetailsById');
const locationRoutes = require('./routes/admin/location');
const userStore = require('./routes/user/store');
// const locationRoutes = require('./models/admin/location');
const userinitialdata = require('./routes/user/userinitialdata');

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
app.use('/api',adminRoutes);
app.use('/api',storeRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',userRoutes);
app.use('/api', cartRoutes);
app.use('/api',initialDataRoutes);
app.use('/api', addressRoutes);
app.use('/api', oderRoutes);
app.use('/api', wishListRoutes);
app.use('/api',storeDetailsById);
app.use('/api',adminOrdersRoutes);
app.use('/api',userStore);
app.use('/api',locationRoutes);
app.use('/api',userinitialdata);



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
