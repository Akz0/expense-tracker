import { auth, expensesDatabase } from "../../Utilities/firebase"
import { ExpensesConstants } from "./constants"


export const AddNewExpense=(expenseObj,callback)=>{
    return dispatch =>{
        expenseObj.user=auth.currentUser.uid;
        dispatch({type:ExpensesConstants.CREATE_EXPENSE_REQUEST})
        expensesDatabase.add(expenseObj).then((doc)=>{
            expenseObj.id=doc.id
            console.table('new expense - ',expenseObj)
            dispatch({
                type:ExpensesConstants.CREATE_EXPENSE_SUCCESS,
                payload:{
                    expense:expenseObj
                }
            })
            callback()
        }).catch(error=>{
            dispatch({
                type:ExpensesConstants.CREATE_EXPENSE_FAILURE,
                payload:{
                    error:error
                }
            })
        })
    }
}

export const GetExpenses=()=>{
    return dispatch=>{
        dispatch({type:ExpensesConstants.GET_EXPENSES_REQUEST})
        expensesDatabase.where('user','==',auth.currentUser.uid).get().then(querySnapshot=>{
            const expensesList=[]
            querySnapshot.forEach((doc)=>{
                const expense=doc.data()
                expense.id=doc.id
                expensesList.push(expense)
            })
            dispatch({
                type:ExpensesConstants.GET_EXPENSES_SUCCESS,
                payload:{
                    expensesList
                }
            })
        }).catch(error=>{
            dispatch({
                type:ExpensesConstants.GET_EXPENSES_FAILURE,
                payload:{
                    error
                }
            })
        })
    }
}
