import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts'
import { HalfContainer } from '../../Designs/Charts';
import { chartColors } from '../../Utilities/categories';
/**
* @author
* @function CurrentMonthPieChart
**/

const CurrentMonthPieChart = (props) => {

    const D = useSelector(state => state.generalData.currentMonthData)
    const currentMonthData = { ...D }

    useEffect(() => {

    }, [currentMonthData])



    const data = [
        {
            label: 'Food',
            value: currentMonthData.food,

        },
        {
            label: 'Bills',
            value: currentMonthData.bills,

        },
        {
            label: 'Finance',
            value: currentMonthData.finance,

        },
        {
            label: 'Travel',
            value: currentMonthData.travel,

        },
        {
            label: 'Daily',
            value: currentMonthData.daily,

        },
        {
            label: 'Clothing',
            value: currentMonthData.clothing,

        },
        {
            label: 'Utilities & Repairs',
            value: currentMonthData.utilities_repairs,

        },
        {
            label: 'Health',
            value: currentMonthData.health,

        },
        {
            label: 'Leisure',
            value: currentMonthData.leisure,

        },
        {
            label: 'Others',
            value: currentMonthData.others,

        }, {
            label: 'Education',
            value: currentMonthData.education,

        }
    ]

    const labels = data.map(item => item.label)
    const series = data.map(item => item.value)

    const options = {
        labels: labels,
        dataLabels: {
            enabled: true,
        },
        legend: {
            width: 400,
            offsetX: 0,
            horizontalAlign: `center`,
            labels: {
                useSeriesColors: true,
            },
            fontSize: '10px',
            position: 'bottom',
        },
        colors: [...Object.values(chartColors)],
        // theme: {
        //     monochrome: {
        //         enabled: true,
        //         color:Colors.red
        //     }
        // },
        stroke: {
            show: true,
            width: 1,
        },
        responsive: [{
            breakpoint: 770,
            options: {
                chart: {
                    width: 340
                },
                legend: {
                    offsetX: -50,
                }
            }
        }]
    }
    return (
        <HalfContainer center>
            <ReactApexChart options={options} series={series} type="pie" width={'450px'} />
        </HalfContainer>
    )

}

export default CurrentMonthPieChart