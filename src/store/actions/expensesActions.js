import { CreateDemoExpensesList } from "../../Utilities/DemoData";
import { auth, expensesDatabase } from "../../Utilities/firebase"
import { ExpensesConstants } from "./constants"
import { AddNewExpenseGeneralData, SetInitialGeneralData, SetInitialGeneralDataEmpty } from "./generalData";


export const AddNewExpense = (expenseObj, callback) => {
    return dispatch => {
        expenseObj.user = auth.currentUser.uid;
        dispatch({ type: ExpensesConstants.CREATE_EXPENSE_REQUEST })
        expensesDatabase.add(expenseObj).then((doc) => {
            expenseObj.id = doc.id
            dispatch({
                type: ExpensesConstants.CREATE_EXPENSE_SUCCESS,
                payload: {
                    expense: expenseObj
                }
            })
            dispatch(AddNewExpenseGeneralData(expenseObj))
            callback()
        }).catch(error => {
            dispatch({
                type: ExpensesConstants.CREATE_EXPENSE_FAILURE,
                payload: {
                    error: error
                }
            })
        })
    }
}

export const GetDemoExpenses = () => {

}
export const GetExpenses = (isDemo=false) => {
    return dispatch => {
        if (isDemo) {
            console.log('Get Initial Demo Data')
            dispatch({ type: ExpensesConstants.GET_EXPENSES_REQUEST })
            const expensesList = CreateDemoExpensesList()
            dispatch({
                type: ExpensesConstants.GET_EXPENSES_SUCCESS,
                payload: {
                    expensesList
                }
            })
            dispatch(SetInitialGeneralData(expensesList))
            return
        }
        dispatch({ type: ExpensesConstants.GET_EXPENSES_REQUEST })
        expensesDatabase.where('user', '==', auth.currentUser.uid).get().then(querySnapshot => {
            const expensesList = []
            querySnapshot.forEach((doc) => {
                const expense = doc.data()
                expense.id = doc.id
                expensesList.push(expense)
            })
            if (expensesList.length) {
                dispatch({
                    type: ExpensesConstants.GET_EXPENSES_SUCCESS,
                    payload: {
                        expensesList
                    }
                })
                dispatch(SetInitialGeneralData(expensesList))
            } else {
                dispatch({
                    type: ExpensesConstants.GET_EXPENSES_SUCCESS_EMPTY,
                    payload: {
                        expensesList
                    }
                })
                dispatch(SetInitialGeneralDataEmpty())
            }
        }).catch(error => {
            dispatch({
                type: ExpensesConstants.GET_EXPENSES_FAILURE,
                payload: {
                    error
                }
            })
        })
    }
}


export const SetCurrentExpense = (currentExpense) => {
    return dispatch => {
        dispatch({
            type: ExpensesConstants.SET_CURRENT_EXPENSE,
            payload: {
                currentExpense
            }
        })
    }
}

export const EditExpense = (expense, callback) => {
    return dispatch => {
        dispatch({ type: ExpensesConstants.EDIT_EXPENSE_REQUEST })
        const expenseObj = { ...expense }
        delete expenseObj['id']
        expensesDatabase.doc(expense.id).update(expenseObj).then(() => {
            dispatch({
                type: ExpensesConstants.EDIT_EXPENSE_SUCCESS,
                payload: {
                    newExpense: expense
                }
            })
            callback()
        }).catch((error) => {
            dispatch({
                type: ExpensesConstants.EDIT_EXPENSE_FAILURE,
                payload: {
                    error
                }
            })
        })


    }
}



