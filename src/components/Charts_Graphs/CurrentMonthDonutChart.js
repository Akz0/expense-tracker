import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { chartColors } from '../../Utilities/categories'

/**
* @author
* @function CurrentMonthDonutChart
**/

export const CurrentMonthDonutChart = ({ D }) => {

    const currentMonthData = { ...D }

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

        }
    ]

    const labels = data.map(item => item.label)
    const series = data.map(item => item.value)
    const options = {

        chart: {
            type: 'donut'
        },
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
        <ReactApexChart options={options} series={series} type="donut" width={'450px'} />
    )

}




