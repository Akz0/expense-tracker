import { ExpensesConstants } from "../actions/constants"

const initState = {
    expensesList: [],
    currentExpense:null,
    expensesLoaded:false,
    error: null,
    loading: false,
    editError: null,
}


const sortByDate=(state,action)=>{
    state = {
        ...state,
        expensesLoaded:true,
        loading: false,
        error: null,
    }

    let expenseItem
    let updatedExpensesList=action.payload.expensesList;
    let numberOfExpenses=updatedExpensesList.length
    for(let i=0;i<numberOfExpenses;i++){
        for(let j=0;j<numberOfExpenses-i-1;j++){
            if(updatedExpensesList[j].date>updatedExpensesList[j+1].date){
                expenseItem=updatedExpensesList[j];
                updatedExpensesList[j]=updatedExpensesList[j+1];
                updatedExpensesList[j+1]=expenseItem;
            }
        }
    }
    state.expensesList=updatedExpensesList
    state.currentExpense=updatedExpensesList[0]

    return state;
}

const ExpensesReducer = (state = initState, action) => {
    switch (action.type) {
        case ExpensesConstants.CREATE_EXPENSE_REQUEST:
        case ExpensesConstants.EDIT_EXPENSE_REQUEST:
        case ExpensesConstants.GET_EXPENSES_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case ExpensesConstants.EDIT_EXPENSE_FAILURE:
            state = {
                ...state,
                loading: false,
                editError: action.payload.error
            }
            break;
        case ExpensesConstants.CREATE_EXPENSE_FAILURE:
        case ExpensesConstants.GET_EXPENSES_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        //Edit
        case ExpensesConstants.EDIT_EXPENSE_SUCCESS:
            state = {
                ...state,
                loading: false,
                editError: null,
            }
            break;

        //Add;
        case ExpensesConstants.CREATE_EXPENSE_SUCCESS:
            state = {
                ...state,
                expensesList:state.expensesList.push(action.payload.expense),
                loading: false,
                error: null,
            }
            break;
        //Get
        case ExpensesConstants.GET_EXPENSES_SUCCESS:
            state = sortByDate(state,action)
            break;
        default: return state;
    }
    return state;
}

export default ExpensesReducer