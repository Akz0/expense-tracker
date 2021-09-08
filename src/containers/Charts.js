import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CurrentMonthDonutChart } from '../components/Charts_Graphs/CurrentMonthDonutChart'
import { TotalCategoryOverTimeLine } from '../components/Charts_Graphs/TotalCategoryOverTime'
import { TotalCategoryOverTimeRadar } from '../components/Charts_Graphs/TotalCategoryOverTimeRadar'
import { TotalOverTimeArea } from '../components/Charts_Graphs/TotalOverTimeArea'
import LabelInput from '../components/UI/LabelInput'
import { Button } from '../Designs/Buttons'
import { Texts } from '../Designs/InputsLabels'
import { Row, UiContainer } from '../Designs/UIContainer'
import { CalculateCategoryWiseOverTime } from '../Utilities/calculateData'
import { chartTypes } from '../Utilities/categories'

/**
* @author
* @function Charts
**/

const Charts = (props) => {
    const isDemo = useSelector(state => state.auth.isDemo)
    const isAuth = useSelector(state => state.auth.authenticated)
    const CurrentMonthData = useSelector(state => state.generalData.currentMonthData)
    const expensesList = useSelector(state => state.expenses.expensesList)
    const [chartType, setChartType] = useState('donut')
    const [newChartType, setNewChartType] = useState('donut')
    const [TotalCategoryOverTime, CategoryExpenseOverTime] = CalculateCategoryWiseOverTime(expensesList)

    useEffect(() => {
        if (!isAuth) {
            props.history.push('/')
        }

    })

    const handleChartType = (event) => {
        setNewChartType(event.target.value)
    }

    // Local States / Chart Types Selection

    const changeChart = () => {
        if (chartType === newChartType) {
            return
        }
        else {
            setChartType(newChartType)
            console.log(`From ${chartType} to => ${newChartType}`)
        }
    }

    const renderChart = (chartType) => {
        let chart = null;
        switch (chartType) {
            case 'line':
                chart = 'Not Yet Perfect'
                // chart = < TotalCategoryOverTimeLine D={CategoryExpenseOverTime} />
                break;
            case 'bar':
                chart = 'Not Yet Perfect'
                // chart = < TotalCategoryOverTimeLine D={CategoryExpenseOverTime} />
                break;
            case 'area':
                chart = <TotalOverTimeArea expensesList={expensesList} />
                break;
            case 'donut':
                chart = <CurrentMonthDonutChart D={CurrentMonthData} />
                break;
            case 'radar':
                chart = <TotalCategoryOverTimeRadar D={TotalCategoryOverTime} />
                break;
            default:
                chart = <CurrentMonthDonutChart D={CurrentMonthData} />
        }
        return chart
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Row half input button>
                <LabelInput value={newChartType} options={chartTypes} label='Select Chart Type' type='select' placeholder='' onChange={handleChartType} />
                {/* <LabelInput value={type} options={expenseTypes} label='Type' type='select' placeholder=''  /> */}
            </Row>
            <Button type="button" onClick={changeChart}>Select</Button>
            <Texts ></Texts>
            <UiContainer chart>
                {renderChart(chartType)}
                {/* <CurrentMonthDonutChart D={CurrentMonthData} /> */}
            </UiContainer>

        </div>
    )

}

export default withRouter(Charts)