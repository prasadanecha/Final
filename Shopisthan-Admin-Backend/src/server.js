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
const adminOrdersRoutes = require('./routes/admin/order.routes');
const locationRoutes = require('./routes/admin/location');


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
app.use('/api',initialDataRoutes);
app.use('/api',adminOrdersRoutes);
app.use('/api',locationRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
