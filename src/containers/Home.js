import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetExpenses } from '../store/actions/expensesActions'

/**
* @author
* @function Home
**/

const Home = (props) => {
    const dispatch=useDispatch()
    const expensesLoaded=useSelector(state=>state.expenses.expensesLoaded)
    useEffect(()=>{
        if(!expensesLoaded){
            dispatch(GetExpenses())
        }
    },[expensesLoaded])
    return (
        <div>Made by Aryan and Om</div>
    )

}

export default Home