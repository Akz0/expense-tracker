import { ExpensesConstants } from "../actions/constants"

const initState = {
    expensesList: [],
    error: null,
    loading: false,
    editError: null,
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
                error: null,
            }
            break;

        //Add;
        case ExpensesConstants.CREATE_EXPENSE_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
            }
            break;
        //Get
        case ExpensesConstants.GET_EXPENSES_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
            }
            break;
        default: return state;
    }
    return state;
}

export default ExpensesReducer