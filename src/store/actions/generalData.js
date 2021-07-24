import { GeneralDataConstants } from "./constants"

export const SetInitialGeneralData=(expensesList)=>{
    return dispatch=>{
        dispatch({type:GeneralDataConstants.CALCULATE_REQUEST})
        dispatch({
            type:GeneralDataConstants.INITIAL_CALCULATE_DATA,
            payload:{
                expensesList
            }
        })
    }
}

export const AddNewExpenseGeneralData=(newExpense)=>{
    return dispatch=>{
        dispatch({type:GeneralDataConstants.CALCULATE_REQUEST})
        dispatch({
            type:GeneralDataConstants.ADDED_NEW_EXPENSE,
            payload:{
                newExpense
            }
        })
    }
}
