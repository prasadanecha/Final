import { orderConstants } from "../actions/constants";

const initState = {
  orders: [],
  orderDetails:{},
  loading:false
};

export default (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
      };
      break;

      case orderConstants.GET_ORDER_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderConstants.GET_ORDER_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        orderDetails: action.payload.orderDetails,
      };
      break;
    case orderConstants.GET_ORDER_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }

  return state;
};