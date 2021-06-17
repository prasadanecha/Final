import axiosIntance from "../helpers/axios";
import { locationContants } from "./constants";


export const addLocation = (location) => {
    console.log(location);
    return async (dispatch) => {
       dispatch({ type: locationContants.ADD_NEW_LOCATION_REQUEST});
        const res = await axiosIntance.post(`/addloaction`, location);
        if (res.status === 201) {
            dispatch({
                type: locationContants.ADD_NEW_LOCATION_SUCCESS,
                payload: {locations : res.data.location}
            })
        } else {
            dispatch({
                type: locationContants.ADD_NEW_LOCATION_FAILURE,
                payload: res.data.error
            })
        }
    }
}

