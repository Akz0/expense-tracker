import { combineReducers } from "redux"
import AuthReducer from "./authentication"
import BasicReducer from "./basic"
import ExpensesReducer from "./expenses"



const RootReducer=combineReducers({
    basic:BasicReducer,
    auth:AuthReducer,
    expenses:ExpensesReducer
})


export default RootReducer
