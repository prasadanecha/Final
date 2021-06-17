import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import storeReducers from './store.reducer';



const rootReducer = combineReducers({

    category: categoryReducer,
    product: productReducer,
    auth : authReducer,
    cart: cartReducer,
    user: userReducer,
    store: storeReducers

});



export default rootReducer;