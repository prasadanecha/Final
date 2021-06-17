import axiosIntance from "../helpers/axios";
import { categoryContants, locationContants, orderConstants, productContants, storeContants } from "./constants"

export const getInitialData = () => {
    return async dispatch => {
        const res = await axiosIntance.post(`/initialdata`);
        if (res.status === 200) {
            const { categories, products,stores,orders,locations } = res.data;
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
    }
}
