import React from 'react'
import ExpenseDetails from '../components/ExpenseDetailsForm'

/**
* @author
* @function Expenses
**/

const Expenses = (props) => {
    return (
        <ExpenseDetails 
            formTitle='Details'

            title='asda'
            amount={0}
            date="2021-12-2"
            category='food'
            type='expense'
            description=''

            handleTitle={()=>{}}
            handleDescription={()=>{}}
            handleAmount={()=>{}}
            handleDate={()=>{}}
            handleCategory={()=>{}}
            handleType={()=>{}}

            buttonName='Edit'
            buttonAction={()=>{}}
            enableEdit={()=>{}}
            disableEdit={()=>{}}

            error=''
            errorStatus=''
        />
    )

}

export default Expenses