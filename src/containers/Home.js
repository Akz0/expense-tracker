import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CurrentMonthPieChart from '../components/Charts_Graphs/CurrentMonthPieChart'
import { GetExpenses } from '../store/actions/expensesActions'
import {mobileSize} from '../Designs/DesignVariables'
import CurrentMonthDetails from '../components/CurrentMonthDetails'
import { FullContanier } from '../Designs/Charts'
/**
* @author
* @function Home
**/
const HomeConatiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding:0;

    @media screen and (min-width:${mobileSize}) {
        padding-top: 30px;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
        align-items: flex-start;
    }
`
const Home = (props) => {
    const dispatch = useDispatch()
    const expensesLoaded = useSelector(state => state.expenses.expensesLoaded)
    useEffect(() => {
        if(!expensesLoaded){
            dispatch(GetExpenses())
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