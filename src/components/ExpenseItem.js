import { DateTime } from 'luxon'
import React, { useEffect } from 'react'
import { ExpenseItemDate, ExpenseItemPrice, ExpenseItemTitle, ExpensesItem } from '../Designs/Expenses'

/**
* @author
* @function ExpenseItem
**/

const ExpenseItem = (props) => {
    const {date,title,amount,type}=props.item
    const key=props.key
    const newDate=DateTime.fromMillis(date).toFormat('DD')
    console.log(newDate)
    useEffect(()=>{
        console.log('Render Expense Item ',key)
    },[date,title,amount,type])

    const returnShortTitle=()=>{
        return title.replace(/(.{30})..+/, "$1…");
    }
    return (
       <ExpensesItem >
           <ExpenseItemDate>{newDate}</ExpenseItemDate>
           <ExpenseItemTitle>{returnShortTitle()}</ExpenseItemTitle>
           <ExpenseItemPrice expense={type==='expense'}>{type==='expense' ? '-':'+'} ₹. {amount}</ExpenseItemPrice>
       </ExpensesItem>
    )

}

export default React.memo(ExpenseItem)