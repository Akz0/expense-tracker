import { AuthConstants } from "../actions/constants"

const initState = {
    authenticated: false,
    loading: false,
    error: null,
    user: null
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case AuthConstants.LOGIN_REQUEST:
            state = {
                ...state,
                loading: false
            }
            break
        case AuthConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                authenticated: true,
                loading: false,
                user: action.payload.user
            }
            break;
        case AuthConstants.LOGIN_FAILURE:
            state = {
                ...state,
                authenticated: false,
                loading: false,
                user: null,
                error:action.payload.error
            }
            break;
        default: return state;
    }
    return state;
}

export default AuthReducer