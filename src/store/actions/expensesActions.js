import { auth, expensesDatabase } from "../../Utilities/firebase"
import { ExpensesConstants } from "./constants"


export const AddNewExpense=(expenseObj,callback)=>{
    return dispatch =>{
        expenseObj.user=auth.currentUser.uid;
        dispatch({type:ExpensesConstants.CREATE_EXPENSE_REQUEST})
        expensesDatabase.add(expenseObj).then(()=>{
            dispatch({type:ExpensesConstants.CREATE_EXPENSE_SUCCESS})
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
        expensesDatabase.where('user','==',auth.currentUser.uid).get().then(querySnapshot=>{
            querySnapshot.forEach((doc)=>{
                console.table(doc.data())
            })
        }).catch(error=>{
            console.error(error)
        })
    }
}
