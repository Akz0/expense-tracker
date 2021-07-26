import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CurrentMonthPieChart from '../components/Charts_Graphs/CurrentMonthPieChart'
import { GetExpenses } from '../store/actions/expensesActions'
import {mobileSize} from '../Designs/DesignVariables'
import CurrentMonthDetails from '../components/CurrentMonthDetails'
/**
* @author
* @function Home
**/
const HomeConatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    padding:0;
    overflow-y: auto;
    overflow-x: none;
    @media screen and (min-width:${mobileSize}) {
        padding-top: 30px;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        overflow-x: none;
    }
`
const Home = (props) => {
    const dispatch = useDispatch()
    const expensesLoaded = useSelector(state => state.expenses.expensesLoaded)
    const isDemo=useSelector(state=>state.auth.isDemo)

    useEffect(() => {
        if(!expensesLoaded){
            dispatch(GetExpenses(isDemo))
        }
    },[])
    return (
        <HomeConatiner>
            <CurrentMonthDetails />
            <CurrentMonthPieChart />
        </HomeConatiner>
    )

}

export default Home