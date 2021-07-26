import React from 'react'
import {  useSelector } from 'react-redux'
import { DateTime } from 'luxon'
import { FullContanier, HalfContainer } from '../Designs/Charts'
import { Title } from '../Designs/UIContainer'
import DataItem from './UI/DataItem';
import Loader from './UI/Loader';
import { InputsContainer, Label } from '../Designs/InputsLabels';
import ExpenseItem from './Expenses/ExpenseItem';

/**
* @author
* @function CurrentMonthDetails
**/

const CurrentMonthDetails = (props) => {
    const date = DateTime.now()
    const expensesList = useSelector(state => state.expenses.expensesList)
    const item = expensesList[0]
    const D = useSelector(state => state.generalData.currentMonthData)

    const currentMonthData = { ...D }
    const generalDataLoading = useSelector(state => state.generalData.isLoading)
    const expensesLoading = useSelector(state => state.expenses.loading)

    const renderData = () => {

        if (currentMonthData.highestExpenseCategory) {
            return <FullContanier start sub>
                <DataItem label="Total Expense" value={'₹. ' + currentMonthData.total} green />
                <DataItem label="Highest Expense Category " value={currentMonthData.highestExpenseCategory.category} />
                <DataItem label={"Total Spent on " + currentMonthData.highestExpenseCategory.category} value={'₹. ' + currentMonthData.highestExpenseCategory.amount} red />
                {item ? <InputsContainer marginTop center>
                    <Label>Latest Expense</Label>
                    <ExpenseItem disabled key={item.id} item={item} />
                </InputsContainer> : ''}
                
            </FullContanier>
        }
    }
    return (
        generalDataLoading || expensesLoading
            ? <Loader />
            : <HalfContainer>
                <Title>{date.toFormat('LLLL') + ' , ' + date.toFormat('y')}</Title>
                {renderData()}

            </HalfContainer>
    )

}

export default CurrentMonthDetails