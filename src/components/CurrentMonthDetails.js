import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '@iconify/react'
import { DateTime } from 'luxon'
import pencilIcon from '@iconify/icons-mdi-light/pencil';
import { FullContanier, HalfContainer } from '../Designs/Charts'
import { NavItem, NavItemTitle } from '../Designs/Navigation'
import { Title } from '../Designs/UIContainer'
import { BasicReducerConstants } from '../store/actions/constants'
import DataItem from './UI/DataItem';
import Loader from './UI/Loader';

/**
* @author
* @function CurrentMonthDetails
**/

const CurrentMonthDetails = (props) => {
    const date = DateTime.now()
    const dispatch = useDispatch()
    const closeSideBar = () => {
        dispatch({ type: BasicReducerConstants.CLOSE_SIDEBAR })
    }
    const D = useSelector(state => state.generalData.currentMonthData)

    const currentMonthData = { ...D }
    const generalDataLoading = useSelector(state => state.generalData.isLoading)
    const expensesLoading = useSelector(state => state.expenses.loading)

    const renderData = () => {
        if (currentMonthData.highestExpenseCategory) {
            return <FullContanier  sub>
                <DataItem label="Total Expense" value={'₹. ' + currentMonthData.total} green />
                <DataItem label="Highest Expense Category " value={currentMonthData.highestExpenseCategory.category} />
                <DataItem label={"Total Spent on " + currentMonthData.highestExpenseCategory.category} value={'₹. ' + currentMonthData.highestExpenseCategory.amount} red />
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