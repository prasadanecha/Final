
import storeAxiosIntance from "../helpers/store.axios";
import { categoryContants, orderConstants, productContants, storeDataContants } from "./constants"


export const getStoreData = () => {
    return async dispatch => {
        dispatch({ type: storeDataContants.GET_ALL_STORE_DATA_REQUEST});
        const res = await storeAxiosIntance.post(`/storeData`);
        if (res.status === 200) {
            const { categories, products,orders } = res.data;
            // console.log(categories, storeProducts);
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            });
            dispatch({
                type: productContants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products }
            });
            dispatch({
                type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                payload: {orders}
            });
            
        }
  
    }
}


export const editStoreProfile = (store) =>{
    return async dispatch => {
     
     dispatch({ type:storeDataContants.EDIT_STORE_DATA_REQUEST});
            try{
                const res = await storeAxiosIntance.post('/editStore',{...store});
                if(res.status === 201){
                    dispatch({
                        type:storeDataContants.EDIT_STORE_DATA_SUCCESS,
                        payload:{updatedStoreProfile:res.data.storeInfo}
                      
                    });
                }else{
                    dispatch({
                       type:storeDataContants.EDIT_STORE_DATA_FAILURE,
                       payload:{error:res.data.err}
                   
                    })
               
                }
            }catch(error){
                console.log(error);
            }
   
   
   }
   }
   
   
