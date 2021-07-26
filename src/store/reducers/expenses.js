import { ExpensesConstants } from "../actions/constants"

const initState = {
    expensesList: [],
    currentExpense: null,
    expensesLoaded: false,
    error: null,
    loading: false,
    editError: null,
}

const sortByDate=(expensesList)=>{
    let expenseItem
    let updatedExpensesList = [...expensesList];
    let numberOfExpenses = updatedExpensesList.length
    for (let i = 0; i < numberOfExpenses; i++) {
        for (let j = 0; j < numberOfExpenses - i - 1; j++) {
            if (updatedExpensesList[j].date < updatedExpensesList[j + 1].date) {
                expenseItem = updatedExpensesList[j];
                updatedExpensesList[j] = updatedExpensesList[j + 1];
                updatedExpensesList[j + 1] = expenseItem;
            }
        }
    }
    return updatedExpensesList
}

const initialExepenses = (state, action) => {
    state = {
        ...state,
        expensesLoaded: true,
        loading: false,
        error: null,
    }
    const updatedExpensesList=sortByDate(action.payload.expensesList)
    state.expensesList = updatedExpensesList
    state.currentExpense = updatedExpensesList[0]

    return state;
}

const editSuccessful = (state, action) => {
    state = {
        ...state,
        loading: false,
        editError: null,
    }

    const newExpense = action.payload.newExpense
    const newExpensesList = [...state.expensesList]
    const oldExpenseIndex = newExpensesList.findIndex(item => item.id === newExpense.id)
    if (oldExpenseIndex > -1) {
        newExpensesList[oldExpenseIndex] = newExpense
        const updatedList=sortByDate(newExpensesList)
        state = {
            ...state,
            expensesList: updatedList,
            currentExpense:updatedList[0],
            loading: false,
            editError: null,
        }
    }
    
    
    return state
}

const addExpense=(state,action)=>{
    const updatedExpensesList=sortByDate([...state.expensesList, action.payload.expense])
    const updatedCurrentExpense=updatedExpensesList[0]

    const updatedState={
        ...state,
        expensesList:updatedExpensesList ,
        currentExpense:updatedCurrentExpense,
        loading: false,
        error: null,
    }
    return updatedState
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
            state = editSuccessful(state, action)
            break;

        //Add;
        case ExpensesConstants.CREATE_EXPENSE_SUCCESS:
            state = addExpense(state,action)
            break;
        //Get
        case ExpensesConstants.GET_EXPENSES_SUCCESS:
            state = initialExepenses(state, action)
            break;
        case ExpensesConstants.GET_EXPENSES_SUCCESS_EMPTY:
            state={
                expensesList: [],
                currentExpense: null,
                expensesLoaded: true,
                error: null,
                loading: false,
                editError: null,
            }
            break;
        case ExpensesConstants.SET_CURRENT_EXPENSE:
            state = {
                ...state,
                currentExpense: action.payload.currentExpense,
            }
            break
        case ExpensesConstants.RESET_EXPENSES_REDUCER:
            state={...initState}
            break;
        default: return state;
    }
    return state;
}

export default ExpensesReducer