import axiosIntance from "../helpers/axios";
import { categoryContants, productConstants, storeContants } from "./constants"

export const getInitialData = () => {
    return async dispatch => {
        // dispatch({ type: initialDataContants.GET_ALL_INITIAL_DATA_REQUEST });
        const res = await axiosIntance.post(`/initialdata`);
        if (res.status === 200) {
            const { categories, products,stores } = res.data;
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products }
            });
            dispatch({
                type: storeContants.GET_ALL_STORE_SUCCESS,
                payload: { stores }
            });           
        }
      console.log(res);
    }
}

export const getStoreDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: storeContants.GET_STORE_DETAILS_BY_ID_REQUEST });
        let res;
            const { storeId } = payload.params;
            res = await axiosIntance.get(`/user/store/${storeId}`);
            if(res.status ===201){
              const {storeDetails,storeProducts } = res.data;
              dispatch({
                  type: storeContants.GET_STORE_DETAILS_BY_ID_SUCCESS,
                  payload: {storeDetails,storeProducts}
              });
            }else{
              dispatch({
                type: storeContants.GET_STORE_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
             });
            }
           
    }
  }