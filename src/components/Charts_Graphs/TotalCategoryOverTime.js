import React from 'react'
import ReactApexChart from 'react-apexcharts'

/**
* @author
* @function TotalCategoryOverTimeLine
**/

export const TotalCategoryOverTimeLine = ({ D }) => {
    const data = D
    const options = {

        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: 'Stock Price Movement',
            align: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
            title: {
                text: 'Price'
            },
        },
        xaxis: {
            type: 'datetime',
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                }
            }
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
    const series = [
        {
            name: 'Food',
            data: data['food']
        },
        {
            name: 'Bills',
            data: data['bills']
        },
        {
            name: 'Finance',
            data: data['finance']
        },
        {
            name: 'Travel',
            data: data['travel']
        },
        {
            name: 'Daily',
            data: data['daily']
        },
        {
            name: 'Clothing',
            data: data['clothing']
        },
        {
            name: 'Utilities',
            data: data['utilities_repairs']
        },
        {
            name: 'Health',
            data: data['health']
        }, {
            name: 'Others',
            data: data['others']
        }, {
            name: 'Leisure',
            data: data['leisure']
        },
    ]



    return (
        <ReactApexChart options={options} series={series} type='area' width={500} />
    )

}