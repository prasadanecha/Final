import axiosIntance from "../helpers/axios"
import { storeContants } from "./constants"



const getAllStoresList = () => {
  return async dispatch => {
      const res = await axiosIntance.post(`/initialData`);
      if (res.status === 200) {
          const {stores} = res.data;
          dispatch({
              type: storeContants.GET_ALL_STORE_SUCCESS,
              payload: { stores }
          });
      }
  }
}


export const addShop = (shop) =>{
 
  return async (dispatch) => {

        dispatch({ type: storeContants.ADD_NEW_STORE_REQUEST})
        const res = await axiosIntance.post(`/shop/create`, {
            ...shop
        });
        if(res.status === 201){

            const {store} =  res.data;
            dispatch({
                    type: storeContants.ADD_NEW_STORE_SUCCESS,
                     payload: { stores:store }
                   });
            dispatch(getAllStoresList());
            
           
        }else{
            const {error} =  res.data;
            dispatch({
                type: storeContants.ADD_NEW_STORE_FAILURE,
                payload: { error }
        });
        }
        
      }

    }

    
export const getStoreDetailsById = (payload) => {
  return async dispatch => {
      dispatch({ type: storeContants.GET_STORE_DETAILS_BY_ID_REQUEST });
      let res;
          const { storeId } = payload.params;
          res = await axiosIntance.get(`/store/${storeId}`);
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

