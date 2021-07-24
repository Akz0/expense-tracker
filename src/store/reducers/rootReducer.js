import { combineReducers } from "redux"
import AuthReducer from "./authentication"
import BasicReducer from "./basic"
import ExpensesReducer from "./expenses"
import GeneralDataReducer from "./generalData"



const RootReducer=combineReducers({
    basic:BasicReducer,
    auth:AuthReducer,
    expenses:ExpensesReducer,
    generalData:GeneralDataReducer,
})


export default RootReducer
