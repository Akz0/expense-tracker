import _ from "lodash"
import { DateTime } from "luxon"
import { GetCategoryName } from "../../Utilities/categories"
import { SortByDateDescending } from "../../Utilities/sortings"
import { GeneralDataConstants } from "../actions/constants"

const initialState = {
    currentMonthData: {
        total: 0,
        food: 0,
        bills: 0,
        finance: 0,
        travel: 0,
        daily: 0,
        clothing: 0,
        utilities_repairs: 0,
        health: 0,
        others: 0,
        leisure: 0,
        education: 0,
        highestExpenseCategory: {
            category: '',
            amount: '',
        },
    },
    eachMonthData: [],
    isLoading: false,

}

const isCurrentMonth = (date) => {
    const currentMonth = DateTime.now().month
    const currentYear = DateTime.now().year
    const expenseMonth = DateTime.fromMillis(date).month
    const expenseYear = DateTime.fromMillis(date).year
    return expenseMonth === currentMonth && expenseYear === currentYear
}

const CalculateHighestExpenseCategory = (obj) => {
    let maxAmount = 0
    let maxProperty = Object.keys(obj)[0]
    for (let item in obj) {
        if (item !== 'total' && item !== 'highestExpenseCategory') {
            if (obj[item] > maxAmount) {
                maxAmount = obj[item]
                maxProperty = item
            }
        }
    }
    const category = GetCategoryName(maxProperty)
    return {
        category: category,
        amount: maxAmount,
    }
}
const countTotalMonths = (expensesList) => {

    const updatedExpensesList = SortByDateDescending(expensesList)
    let date
    date = DateTime.fromMillis(updatedExpensesList[0].date)
    const Last = {
        month: date.month,
        year: date.year,
    }
    date = DateTime.fromMillis(updatedExpensesList[updatedExpensesList.length - 1].date)
    const First = {
        month: date.month,
        year: date.year,
    }

    return 0;
}

const CalculateCurrentMonthData = (oldCurrentMonthData, expensesList) => {
    const UpdatedCurrentMonthData = { ...oldCurrentMonthData }

    expensesList.forEach(expense => {
        if (isCurrentMonth(expense.date)) {
            if (expense.type === 'expense') {
                UpdatedCurrentMonthData[expense.category] += expense.amount
                UpdatedCurrentMonthData['total'] += expense.amount
            }
        }
    })

    UpdatedCurrentMonthData.highestExpenseCategory = CalculateHighestExpenseCategory(UpdatedCurrentMonthData)

    return UpdatedCurrentMonthData
}

const calculateInitialData = (state, payload) => {
    const expensesList = payload.expensesList
    const UpdatedCurrentMonthData = CalculateCurrentMonthData(state.currentMonthData, expensesList)
    const UpdatedEachMonthData = countTotalMonths(expensesList)
    state = {
        ...state,
        currentMonthData: UpdatedCurrentMonthData,
        isLoading: false,
    }

    return state
}

const addedNewData = (state, payload) => {
    const newExpense = { ...payload.newExpense }
    const UpdatedCurrentMonthData = { ...state.currentMonthData }
    if (isCurrentMonth(newExpense.date)) {
        UpdatedCurrentMonthData[newExpense.category] += newExpense.amount
        UpdatedCurrentMonthData['total'] += newExpense.amount
        UpdatedCurrentMonthData.highestExpenseCategory = CalculateHighestExpenseCategory(UpdatedCurrentMonthData)
    }
    state = {
        ...state,
        currentMonthData: UpdatedCurrentMonthData,
        isLoading: false,
    }
    return state
}

const GeneralDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GeneralDataConstants.CALCULATE_REQUEST:
            state = {
                ...state,
                isLoading: true,
            }
            break;
        case GeneralDataConstants.INITIAL_CALCULATE_DATA:
            state = calculateInitialData(state, action.payload)
            break;
        case GeneralDataConstants.INITIAL_CALCULATE_DATA_EMPTY:
            state = {
                ...initialState
            }
            break;
        case GeneralDataConstants.ADDED_NEW_EXPENSE:
            state = addedNewData(state, action.payload)
            break;
        case GeneralDataConstants.EDITED_EXPENSE:
            state = calculateInitialData(state, action.payload)
            break;
        case GeneralDataConstants.CLEAR_DATA:
            state = _.cloneDeep(initialState)
            break;
        default: state = { ...state }
    }
    return state
}

export default GeneralDataReducer