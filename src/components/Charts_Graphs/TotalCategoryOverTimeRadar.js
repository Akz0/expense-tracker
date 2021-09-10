import React from 'react'
import ReactApexChart from 'react-apexcharts';

/**
* @author
* @function TotalCategoryOverTimeRadar
**/

export const TotalCategoryOverTimeRadar = ({ D }) => {


    const series = [{
        name: 'Categorical Expense',
        data: Object.values(D),
    }]
    const options = {
        chart: {
            height: 450,
            type: 'radar',
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#222831']
                    }
                }
            }
        },
        title: {
            text: 'Categorical Expense Over Time',
            style: {
                color: '#fff',
                fontSize: '10px'
            }
        },
        colors: ['#FF4560'],
        markers: {
            size: 2,
            colors: ['#fff'],
            strokeColor: '#f05454',
            strokeWidth: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '₹. ' + val;
                }
            }
        },
        xaxis: {
            categories: ['Food', 'Bills', 'Finance', 'Travels', 'Daily', 'Clothing', 'Utilities', 'Health', 'Others', 'Leisure', 'Education']
        },
        yaxis: {
            show: false,
            tickAmount: 6,


        },
        responsive: [{
            breakpoint: 770,
            options: {
                chart: {
                    width: 340,
                    height: 340
                },
                legend: {
                    offsetX: -50,
                }
            }
        }]
    }

    return (
        <ReactApexChart options={options} series={series} type="radar" width={500} />
    )

}