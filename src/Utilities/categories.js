export const categories=[
    {
        value:'food',
        name:'Food'
    },
    {
        value:'bills',
        name:'Bills'
    },
    {
        value:'finance',
        name:'Finance'
    },
    {
        value:'travel',
        name:'Travel'
    },
    {
        value:'daily',
        name:'Daily'
    },
    {
        value:'clothing',
        name:'Clothing'
    },
    {
        value:'utilities_repairs',
        name:'Utilities And Repairs'
    },
    {
        value:'health',
        name:'Health'
    },
    {
        value:'leisure',
        name:'Leisure'
    },
    {
        value:'others',
        name:'Others'
    }
]

export const expenseTypes=[
    {
        value:'expense',
        name:'Expense'
    },
    {
        value:'income',
        name:'Income'
    }
]


export function GetCategoryName(nameKey){
    for (var i=0; i < categories.length; i++) {
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
