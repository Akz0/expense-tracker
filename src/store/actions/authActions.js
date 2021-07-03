import { auth } from "../../Utilities/firebase"
import { DemoUser } from "../reducers/initialDemoData"
import { AuthConstants } from "./constants"

const loginSuccess = (dispatch, userData) => {
    dispatch({
        type: AuthConstants.LOGIN_SUCCESS,
        payload: {
            user: {
                name: '',
                email: userData.user.email,
                uid: userData.user.uid
            }
        }
    })
}
const loginFailure = (dispatch, error) => {
    let errorMessage = 'Something Went Wrong, Please Try Again'
    if (error === 'auth/user-not-found' || error === 'auth/wrong-password') {
        errorMessage = 'Invalid Credentials'
    }
    dispatch({
        type: AuthConstants.LOGIN_FAILURE,
        payload: {
            error: errorMessage
        }
    })
}

export const Login = (email, password) => {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST })
        auth.signInWithEmailAndPassword(email, password).then(userData => {
            console.log('Login Success')
            loginSuccess(dispatch, userData)
        }).catch(error => {
            console.log('Login Fail')
            loginFailure(dispatch,error.code)
        })
    }
}

export const Logout = () => {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGOUT_REQUEST })
        auth.signOut().then(() => {
            console.log('Logout Success')
            dispatch({ type: AuthConstants.LOGOUT_SUCCESS })
        }).catch(error => { })
    }
}

const signUpSuccess = (dispatch, userData) => {
    dispatch({
        type: AuthConstants.SIGNUP_SUCCESS,
        payload: {
            user: {
                name: '',
                email: userData.user.email,
                uid: userData.user.uid
            }
        }
    })
}
const signUpFailure = (dispatch, error) => {
    let errorMessage = 'Something went Wrong, Please Try Again'
    if (error === 'auth/email-already-in-use') {
        errorMessage = 'Email Already Registered'
    }
    dispatch({
        type: AuthConstants.SIGNUP_FAILURE,
        payload: {
            error: errorMessage
        }
    })
}
export const SignUp = (email, password) => {
    return dispatch => {
        dispatch({ type: AuthConstants.SIGNUP_REQUEST })
        auth.createUserWithEmailAndPassword(email, password).then(userData => {
            console.log('Sign Up Success')
            signUpSuccess(dispatch, userData)
        }).catch(error => {
            console.log('Sign Up Fail')
            signUpFailure(dispatch,error.code)
        })
    }
}

export const DemoAuth = () => {
    console.log('Demo Login')
    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST })
        dispatch({
            type: AuthConstants.LOGIN_SUCCESS,
            payload: {
                user: DemoUser
            }
        })
    }
}