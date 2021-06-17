import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import { useDispatch, useSelector } from "react-redux";
import { isStoreLoggedIn, isUserLoggedIn } from './actions'
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";
import { getInitialData } from "./actions/initialData.action";
import Store from "./containers/Store";
import NewPage from "./containers/NewPage";
import Reset from "./containers/Reset/reset";
import NewPassword from "./containers/Reset/NewPassword";
import AddStore from "./containers/AddStore";
import { OrderDetailsPage } from "./containers/OrderDetailsPage";
import ShopProfile from "./containers/ShopProfile";
import { PrivateRoute, StorePrivateRoute } from "./components/HOC/PrivateRoute";
// import  StoreProduct from "./containers/StoreContainers/StoreProduct";
// import { StoreOrder } from "./containers/StoreContainers/StoreOrders";
import StoreHome from "./containers/StoreContainers/StoreHome";
import StoreOrder from "./containers/StoreContainers/StoreOrders";
import StoreProduct from "./containers/StoreContainers/StoreProduct";
import StoreProfile from "./containers/StoreContainers/StoreProfile";
import AddProduct from "./containers/StoreContainers/AddProduct";
import { getStoreData } from "./actions/storedata.action";
import 'antd/dist/antd.css';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const storeauth = useSelector(state => state.storeauth)


   useEffect(()=>{
    if(!auth.authenticate){
     return dispatch(isUserLoggedIn());
     
    }
    if(auth.authenticate){
      dispatch(getInitialData()); 
    }
  })

  useEffect(()=>{
    if(!storeauth.authenticate){
     return dispatch(isStoreLoggedIn());
     
    }
    if(storeauth.authenticate){
      dispatch(getStoreData()); 
    }
  })



  return (
    <div className="App">

      <Switch>
      <StorePrivateRoute path = "/storeHome" exact component={StoreHome} />
      <StorePrivateRoute path = "/storeProduct"  exact component={StoreProduct} />
      <StorePrivateRoute path = "/storeOrder"  exact component={StoreOrder} />
      <StorePrivateRoute path = "/storeProfile" exact component ={StoreProfile} />
      <StorePrivateRoute path = "/addProduct" exact component ={AddProduct} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute  path ="/:storeId/store" exact component ={ShopProfile} />
        <PrivateRoute path= "/:orderId/o" component ={OrderDetailsPage}/>
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/store" component={Store} />
        <PrivateRoute path="/addStore" component={AddStore} />
   

        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route  extact path="/reset" component={Reset}></Route>
        <Route path="/resetpassword/:token" component={NewPassword}></Route>
      </Switch>

    </div>
  );
}

export default App;
