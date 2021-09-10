export const categories = [
    {
        value: 'food',
        name: 'Food'
    },
    {
        value: 'bills',
        name: 'Bills'
    },
    {
        value: 'finance',
        name: 'Finance'
    },
    {
        value: 'travel',
        name: 'Travel'
    },
    {
        value: 'daily',
        name: 'Daily'
    },
    {
        value: 'clothing',
        name: 'Clothing'
    },
    {
        value: 'utilities_repairs',
        name: 'Utilities And Repairs'
    },
    {
        value: 'health',
        name: 'Health'
    },
    {
        value: 'leisure',
        name: 'Leisure'
    },
    {
        value: 'others',
        name: 'Others'
    }, {
        value: 'education',
        name: 'Education'
    }
]

export const expenseTypes = [
    {
        value: 'expense',
        name: 'Expense'
    },
    {
        value: 'income',
        name: 'Income'
    }
]

export const chartTypes = [
    {
        value: 'line',
        name: 'Line Chart'
    },
    {
        value: 'bar',
        name: 'Bar Chart'
    },
    {
        value: 'area',
        name: 'Area Chart (Total Over Time)'
    },
    {
        value: 'radar',
        name: 'Radar Chart (Total Category Wise)'
    },
    {
        value: 'donut',
        name: 'Donut (Current Month Category Wise)'
    }
]

export const chartColors = {
    blue: "#008ffb",
    red: "#d1908e",
    yellow: "#feb019",
    green: "#00e396",
    purple: "#775dd0",
    lightgreen: "#8DB255",
    pink: "#ff4560",
    orange: "#fe6700",
    dark1: "#48929B",
    dark2: "#e0b0ff",
    dark3: '#bfa4fc'
}


export function GetCategoryName(nameKey) {
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].value === nameKey) {
            return categories[i].name;
        }
    }
}

// {
//     title:'',
//         description:'',
//         date:{
//             date:'',
//             month:'',
//             year:'',
//         },
//         amount:,
//         type:'',
//         category:''
// }
