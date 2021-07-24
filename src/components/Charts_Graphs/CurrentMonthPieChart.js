import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts'
import { HalfContainer } from '../../Designs/Charts';
import { Colors } from '../../Designs/DesignVariables';
/**
* @author
* @function CurrentMonthPieChart
**/

const CurrentMonthPieChart = (props) => {

    const D = useSelector(state => state.generalData.currentMonthData)
    const currentMonthData = { ...D }

    useEffect(() => {
        
    }, [currentMonthData])

    const colors = {
        blue: "#008ffb",
        red: "#d1908e",
        yellow: "#feb019",
        green: "#00e396",
        purple: "#775dd0",
        lightgreen: "#8DB255",
        pink: "#ff4560",
        orange: "#fe6700",
        dark1: "#48929B",
        dark2: "#e0b0ff",//a
    }


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
        labels: labels,
        dataLabels: {
            enabled: true,
        },
        legend: {
            width: 400,
            offsetX: 30,
            horizontalAlign: `center`,
            labels: {
                useSeriesColors: true,
            },
            fontSize: '10px',
            position: 'bottom',
        },
        // colors: [...Object.values(colors)],
        theme: {
            monochrome: {
                enabled: true,
                color:Colors.red
            }
        },
        stroke: {
            show: true,
            width: 1,
        },
        responsive: [{
            breakpoint: 770,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    offsetX: -20,
                }
            }
        }]
    }
    return (
        <HalfContainer center>
            <ReactApexChart options={options} series={series} type="pie" width={'500px'} />
        </HalfContainer>
    )

}

export default CurrentMonthPieChart