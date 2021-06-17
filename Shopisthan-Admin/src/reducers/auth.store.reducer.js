import { authConstants, storeDataContants } from "../actions/constants"

const initState = {
    token: null,
    store: {
        id:'', userName:'', shopName:'', shopType:'',shopEmail:'', shopCategory:'', shopPhoneNo:'',shopAddress:'',role:''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''

};

export default (state = initState, action) => {

    // console.log(action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }

            break;
        case authConstants.STORE_LOGIN_SUCCESS:
            state = {
                ...state,
                store: action.payload.store,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
            //  case authConstants.LOGIN_SUCCESS:
            // state = {
            //     ...state,
            //     store: action.payload.store,
            //     token: action.payload.token,
            //     authenticate: true,
            //     authenticating: false
            // }
            // break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
            case storeDataContants.EDIT_STORE_DATA_REQUEST:
                state = {
                    ...state,
                
                }
                break;
         case storeDataContants.EDIT_STORE_DATA_SUCCESS:
                    state = {
                        ...state,
                        store: action.payload.updatedStoreProfile,
                    
                    }
                    break;
          case storeDataContants.EDIT_STORE_DATA_FAILURE:
                        state = {
                            ...state,
                            error: action.payload.error,
                        
                        }
                        break;
    }

    return state;

}