import { productContants } from "../actions/constants";

const initialState = {
 products:[],
 error: null,
 loading:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case productContants.GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
       break;
       case productContants.ADD_NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.product,
                loading:false
             
            }
       break;
       case productContants.ADD_NEW_PRODUCT_REQUEST: 
            state = {
                ...state,
                // products: action.payload.product,
                loading:true
            }
       break;
       case productContants.ADD_NEW_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading:false
            }
       break;
    }
return state;

}