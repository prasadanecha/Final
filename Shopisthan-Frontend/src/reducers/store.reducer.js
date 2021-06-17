import { storeContants } from "../actions/constants";

const initialState = {
  stores: [],
  loading: false,
  error: null,
  storeProducts:[],
  storeDetails:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case storeContants.GET_ALL_STORE_SUCCESS:
    case storeContants.GET_ALL_STORE_SUCCESS:
      state = {
        ...state,
        stores: action.payload.stores,
      };
      break;
    case storeContants.ADD_NEW_STORE_REQUEST:
      state = {
        ...state,
        loading: true,
        stores: action.payload.stores,
      };
      break;
    case storeContants.ADD_NEW_STORE_SUCCESS:
      state = {
        ...state,
        stores: action.payload.stores,
        loading: false,
      };
      break;
    case storeContants.ADD_NEW_STORE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case storeContants.GET_STORE_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        storeDetails: action.payload.storeDetails,
        storeProducts: action.payload.storeProducts,
        loading: false,
        added: false,
      };
      break;
    case storeContants.GET_STORE_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        added: false,
      };
      break;
    case storeContants.GET_STORE_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: false,
        added: false,
      };
      break;
  }
  return state;
};
