import { auth } from "../../Utilities/firebase"
import { DemoUser } from "../reducers/initialDemoData"
import { AuthConstants, ExpensesConstants, UserConstants } from "./constants"

const loginSuccess = (dispatch, userData) => {
    dispatch({
        type: AuthConstants.LOGIN_SUCCESS,
        payload: {
            user: {
                name: userData.user.displayName,
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
            loginSuccess(dispatch, userData)
        }).catch(error => {
            loginFailure(dispatch,error.code)
        })
    }
}

export const Logout = () => {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGOUT_REQUEST })
        auth.signOut().then(() => {
            dispatch({ type:ExpensesConstants.RESET_EXPENSES_REDUCER})
            dispatch({ type: AuthConstants.LOGOUT_SUCCESS })
        }).catch(error => { })
    }
}

const signUpSuccess = (dispatch, userData) => {
    dispatch({
        type: AuthConstants.SIGNUP_SUCCESS,
        payload: {
            user: {
                name: userData.user.displayName,
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
            signUpSuccess(dispatch, userData)
        }).catch(error => {
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

// Updating User Details
const updateSuccesfull=(dispatch)=>{
    dispatch({
        type:UserConstants.EDIT_SUCCESS,
        payload:{
            user:{
                name:auth.currentUser.displayName,
                email:auth.currentUser.email,
                uid:auth.currentUser.uid
            }
        }
    })
}
const updateFailed=(dispatch,error)=>{
    let message
    if(error==='auth/email-already-in-use'){
        message="Email already in use, please enter another Email"
    }
    if(error==='auth/wrong-password'){
        message="Verification Failed"
    }
    else{
        message="Something went wrong. Please try again later."
    }
    dispatch({
        type:UserConstants.EDIT_FAILURE,
        payload:{
            user:{
                name:auth.currentUser.displayName,
                email:auth.currentUser.email,
                uid:auth.currentUser.uid
            },
            editError:message
        }
    })
}
export const UpdateUserProfile=(email,name,Callback)=>{
    return dispatch=>{
        dispatch({type:UserConstants.EDIT_REQUEST})
        auth.currentUser.updateProfile({displayName:name}).then(()=>{
            return auth.currentUser.updateEmail(email)
        }).then(()=>{
            updateSuccesfull(dispatch)
            Callback()
        }).catch(error=>{
            console.log(error)
            updateFailed(dispatch,error.code)
        })
    }
}

export const UpdateUserPassword=(password)=>{
    return dispatch=>{
        return auth.currentUser.updatePassword(password)
    }
}

export const DeleteUser=(password,Callback)=>{
    
    return dispatch=>{
        auth.currentUser.delete()
        .then(()=>{
            Callback(Logout)
        })
        .catch(error=>{
            updateFailed(dispatch,error.code)
        })
    }
}