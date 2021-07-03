import { AuthConstants } from "../actions/constants"

const initState = {
    authenticated: false,
    loading: false,
    error: null,
    user: null
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        // Login
        case AuthConstants.LOGIN_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case AuthConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                authenticated: true,
                loading: false,
                user: action.payload.user,
                error:null
            }
            break;
        case AuthConstants.LOGIN_FAILURE:
            state = {
                ...state,
                authenticated: false,
                loading: false,
                user: null,
                error: action.payload.error
            }
            break;

        //Logout
        case AuthConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case AuthConstants.LOGOUT_SUCCESS:
            state = {
                ...state,
                authenticated: false,
                loading: false,
                user: null
            }
            break;
        case AuthConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                authenticated: false,
                loading: false,
                user: null,
                error: action.payload.error
            }
            break;
        //Sign Up
        case AuthConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case AuthConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                authenticated: true,
                loading: false,
                user: action.payload.user,
                error:null
            }
            break;
        case AuthConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                authenticated: false,
                loading: false,
                user: null,
                error: action.payload.error
            }
            break;
        default: return state;
    }
    return state;
}

export default AuthReducer