import { categoryContants, locationContants } from "../actions/constants";

const initState = {
    locations: [],
    loading: false,
    error: null
};


export default (state = initState, action) => {
    switch (action.type) {
        case locationContants.GET_ALL_LOCATION_SUCCESS:
            state = {
                ...state,
                locations: action.payload.locations
            }

            break;

        case locationContants.ADD_NEW_LOCATION_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case locationContants.ADD_NEW_LOCATION_SUCCESS:
            state = {
                ...state,
                locations:action.payload.locations,
                loading: false,
            }
            break;
        case locationContants.ADD_NEW_LOCATION_FAILURE:
            state = {
                ...initState,
                loading : false,
                error: action.payload.error
            }
            break;
        
    }

    return state;
}