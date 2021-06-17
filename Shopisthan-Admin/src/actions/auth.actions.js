import axiosIntance from "../helpers/axios";
import axios from "../helpers/axios";
import { authConstants, locationContants } from "./constants";
import { categoryContants, orderConstants, productContants, storeContants } from "./constants"




export const login = (admin) => {

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axiosIntance.post(`/admin/signin`, {
      ...admin 
    });

    if (res.status === 200) {
      const {admin,store,token } = res.data;
       if(admin){

      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));
      dispatch({
        type: authConstants.ADMIN_LOGIN_SUCCESS,
        payload: {
          token,
          admin
        }
      });
      const { categories, products,stores,orders,locations} = res.data;
          dispatch({
              type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
              payload: { categories }
          });
          dispatch({
              type: productContants.GET_ALL_PRODUCTS_SUCCESS,
              payload: { products }
          });
          dispatch({
              type: storeContants.GET_ALL_STORE_SUCCESS,
              payload: { stores }
          });
          dispatch({
              type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
              payload: { orders }
          });
          dispatch({
            type: locationContants.GET_ALL_LOCATION_SUCCESS,
            payload: { locations }
        });
       }
       if(store){
        localStorage.setItem("storetoken", token);
        localStorage.setItem("store", JSON.stringify(store));
        dispatch({
          type: authConstants.STORE_LOGIN_SUCCESS,
          payload: {
            token,
            store
          }
        });
        const { categories, products,orders } = res.data;
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
     
    else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const admin = JSON.parse(localStorage.getItem("admin"));
      dispatch({
        type: authConstants.ADMIN_LOGIN_SUCCESS,
        payload: {
          token,
          admin
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" }
      });
    }
  };
};


export const isStoreLoggedIn = () => {
  return async (dispatch) => {
    const storetoken = localStorage.getItem("storetoken");
    if (storetoken) {
      const store = JSON.parse(localStorage.getItem("store"));
      dispatch({
        type: authConstants.STORE_LOGIN_SUCCESS,
        payload: {
         token: storetoken,
          store
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" }
      });
    }
  };
};


export const signout = () => {
  return async dispatch => {

    dispatch({ type: authConstants.LOGOUT_REQUEST });

    const res = await axios.post(`/admin/signout`)
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS
      });

    } else {

      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error }
      });
    }


  }
}




// export const reset = (user) => {
//   return async dispatch => {

//     // dispatch({ type: authConstants.LOGOUT_REQUEST });
//     console.log(user);
      
//     const res = await axios.post(`/admin/reset-password`,user)
//     if (res.status !== 422) {
//       // console.log("Run");
//       // console.log(res);
//       // return(res);
//       return true;
//     } else {

//      return false;
//     }


//   }
// }




export const newPassword = (user) => {
  return async dispatch => {

    // dispatch({ type: authConstants.LOGOUT_REQUEST });
    console.log(user);

    const res = await axios.post(`/new-password`,user)
    if (res.status === 200) {
      console.log("Run");
      console.log(res);
    } else {

     console.log("Error");
    }


  }
}





