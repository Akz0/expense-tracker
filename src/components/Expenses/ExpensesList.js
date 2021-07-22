import React from 'react'
import { useSelector } from 'react-redux'
import { ExpensesListContainer } from '../../Designs/Expenses'
import Loader from '../UI/Loader'
import ExpenseItem from './ExpenseItem'

/**
* @author
* @function ExpensesList
**/

const ExpensesList = (props) => {
    const expensesList = useSelector(state => state.expenses.expensesList)
    const renderExpensesList = () => {
        if (expensesList) {
            return expensesList.map((item, index) => {
                return <ExpenseItem key={item.id} item={item} />
            })
        }
    }
    const {loading}=props
    return (
        // <div></div>

        <ExpensesListContainer>

            {loading?<Loader/>:renderExpensesList()}
        </ExpensesListContainer>

    )

}

export default ExpensesList