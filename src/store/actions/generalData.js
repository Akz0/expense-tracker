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

export const EditExpenseGeneralData=(expensesList)=>{
    return dispatch=>{
        dispatch({type:GeneralDataConstants.CALCULATE_REQUEST})
        dispatch({
            type:GeneralDataConstants.EDITED_EXPENSE,
            payload:{
                expensesList
            }
        })
    }
}


export const SetInitialGeneralDataEmpty=()=>{
    return dispatch=>{
        dispatch({type:GeneralDataConstants.CALCULATE_REQUEST})
        dispatch({
            type:GeneralDataConstants.INITIAL_CALCULATE_DATA_EMPTY,
        })
    }
}