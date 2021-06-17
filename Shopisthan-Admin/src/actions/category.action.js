
import axiosIntance from "../helpers/axios";
import { categoryContants } from "./constants";

 const getAllCategory = () => {
    return async (dispatch) => {

        dispatch({ type: categoryContants.GET_ALL_CATEGORIES_REQUEST });
        const res = await axiosIntance.get(`category/getcategory`);
        if (res.status === 200) {

            const { categoryList } = res.data;
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({
                type: categoryContants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const addCategory = (from) => {
    return async (dispatch) => {
       dispatch({ type: categoryContants.ADD_NEW_CATEGORY_REQUEST});
        const res = await axiosIntance.post(`/category/create`, from);
        if (res.status === 201) {
            dispatch({
                type: categoryContants.ADD_NEW_CATEGORY_SUCCESS,
                payload: {category : res.data.category}
            })
        } else {
            dispatch({
                type: categoryContants.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error
            })
        }
    }
}


export const updateCategories = (from) => {
    return async (dispatch) => {
     dispatch({type: categoryContants.UPDATE_CATEGORY_REQUEST});
        const res = await axiosIntance.post(`/category/update`, from);
        if (res.status === 201) {
            dispatch({type:categoryContants.UPDATE_CATEGORY_SUCCESS});
            dispatch(getAllCategory());

        } else {
            const {error} = res.data;
            dispatch({
                type:categoryContants.UPDATE_CATEGORY_FAILURE,
                payload:{error}
            })
        }
    }
}


export const deleteCategories = (ids) => {

    return async dispatch => {
        dispatch({type: categoryContants.DELETE_CATEGORY_REQUEST});
    
        const res = await axiosIntance.post(`/category/delete`, {
            payload:{
                ids
            }
        });
        if(res.status == 201){
                dispatch({type:categoryContants.DELETE_CATEGORY_SUCCESS});
                dispatch(getAllCategory());
        }
    else{
        dispatch({
            type:categoryContants.DELETE_CATEGORY_FAILURE,
            payload:{error: res.data.error}
        })
    }
    }
}

export{
    getAllCategory
}