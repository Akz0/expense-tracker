import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import { UiContainer } from '../../Designs/UIContainer'
import { CalculateTotalOverTime } from '../../Utilities/calculateData'
/**
* @author
* @function TotalOverTimeArea
**/

export const TotalOverTimeArea = ({ expensesList }) => {

    const data = CalculateTotalOverTime(expensesList)

    const series = [{
        name: "Total Expense",
        data: data.map(item => item.amount)
    }]
    const options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: true
            },
            toolbar: {
                show: true,
                export: {
                    color: 'black'
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return '₹. ' + val;
            }
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 2,
            style: 'hollow',
        },
        title: {
            text: 'Your Total Expenses Over Time ',
            align: 'left',
            style: {
                color: '#fff',
            }

        },
        labels: data.map(item => item.date),
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    color: '#fff',
                },
            }
        },
        yaxis: {
            opposite: false,
            labels: {
                show: true,
                style: {
                    color: '#fff',
                },
            }
        },
        legend: {
            horizontalAlign: 'left',
            style: {
                color: '#fff'
            }
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            },
            y: {
                formatter: function (val) {
                    return '₹. ' + val;
                }
            },
            fillSeriesColor: true,
            theme: true,
            style: {
                fontSize: '12px',
                fontFamily: undefined
            },
        },

        annotations: {
            yaxis: [{
                label: {
                    show: true,
                    style: {
                        color: "#fff",
                        background: '#00E396'
                    }
                }
            }],
            xaxis: [{
                label: {
                    show: true,
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },
        responsive: [{
            breakpoint: 770,
            options: {
                chart: {
                    width: 340
                },
                legend: {
                    offsetX: -50,
                },
                title: {
                    text: 'Your Total Expenses Over Time ',
                    align: 'left',
                    style: {
                        color: '#fff',
                        fontSize: '10px'
                    }

                }
            }
        }]
    }

    /*
    const options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                    show: true,
                    text: 'Support',
                    style: {
                        color: "#fff",
                        background: '#00E396'
                    }
                }
            }],
            xaxis: [{
                x: data[0].date,
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: true,
                    text: 'Rally',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },
        dataLabels: {
            enabled: true
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: data[0].date,
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
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
    */
    return (
        <UiContainer style={{ width: '100%' }} >
            <ReactApexChart options={options} series={series} type="area" height={350} width={540} style={{ color: '#fff' }} />
        </UiContainer >
    )

}