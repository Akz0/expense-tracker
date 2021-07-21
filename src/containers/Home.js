import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetExpenses } from '../store/actions/expensesActions'

/**
* @author
* @function Home
**/

const Home = (props) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetExpenses())
    },[])
    return (
        <div>Made by Aryan and Om</div>
    )

}

export default Home