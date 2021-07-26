import { DateTime } from 'luxon'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ExpenseItemDate, ExpenseItemPrice, ExpenseItemTitle, ExpensesItem } from '../../Designs/Expenses'
import { SetCurrentExpense } from '../../store/actions/expensesActions'

/**
* @author
* @function ExpenseItem
**/

const ExpenseItem = (props) => {
    const dispatch=useDispatch()
    const {date,title,amount,type,id}=props.item
    const newDate=DateTime.fromMillis(date).toFormat('DD')
    useEffect(()=>{
        
    },[date,title,amount])

    const returnShortTitle=()=>{
        return title.replace(/(.{25})..+/, "$1…");
    }

    const setCurrentItem=()=>{
        dispatch(SetCurrentExpense(props.item))
    }
    return (
       <ExpensesItem style={{pointerEvents:props.disabled?'none':'auto'}}onClick={setCurrentItem}>
           <ExpenseItemDate>{newDate}</ExpenseItemDate>
           <ExpenseItemTitle>{returnShortTitle()}</ExpenseItemTitle>
           <ExpenseItemPrice expense={type==='expense'}>{type==='expense' ? '-':'+'} ₹. {amount}</ExpenseItemPrice>
       </ExpensesItem>
    )

}

export default React.memo(ExpenseItem)