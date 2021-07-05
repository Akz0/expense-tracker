import { AuthConstants, UserConstants } from "../actions/constants"

const initState = {
    authenticated: false,
    loading: false,
    error: null,
    user: null,
    editError:null,
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
                error: null
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
                error: null
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
        //Edit
        case UserConstants.EDIT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case UserConstants.EDIT_SUCCESS:
            state = {
                ...state,
                authenticated: true,
                loading: false,
                user: action.payload.user,
                editError: null
            }
            break;
        case UserConstants.EDIT_FAILURE:
            state = {
                ...state,
                loading: false,
                user:action.payload.user,
                editError: action.payload.editError
            }
            break;
        default: return state;
    }
    return state;
}

export default AuthReducer