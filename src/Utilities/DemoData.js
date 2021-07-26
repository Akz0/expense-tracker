import { DateTime } from "luxon"


const DemoExepensesList = [
    {
        title: 'Chicken',
        type: 'expense',
        description: 'Sunday Lunch For Mom',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        category: 'food',
        amount: 250,
        date: 0,
        id: ''
    },
    {
        type: 'expense',
        amount: 359,
        category: 'food',
        description: 'Ordered Food From Outside Today',
        title: 'Zomato Dinner',
        date: 0,
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    },
    {
        type: 'expense',
        title: 'Railyway',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        category: 'travel',
        amount: 1450,
        description: 'train booking for Dad',
        date: 0,
        id: ''
    },
    {
        type: 'expense',
        amount: 1700,
        date: 0,
        category: 'finance',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        description: '',
        title: 'Insurance',
        id: ''
    },
    {
        title: 'Television Recharge',
        date: 0,
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        category: 'bills',
        description: '',
        amount: 500,
        type: 'expense',
        id: ''
    },
    {
        type: 'expense',
        category: 'utilities_repairs',
        description: 'Got new Water Purifier',
        date: 0,
        amount: 5000,
        title: 'Aquaguard',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    },
    {
        title: 'Phone Recharge',
        type: 'expense',
        amount: 600,
        date: 0,
        category: 'bills',
        description: '',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    },
    {
        amount: 950,
        title: 'Light Bill',
        description: '',
        date: 0,
        category: 'bills',
        type: 'expense',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    },
    {
        category: 'health',
        amount: 1500,
        title: 'Medicines for Hairfall',
        description: '',
        date: 0,
        type: 'expense',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    },
    {
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        date: 0,
        description: '',
        amount: 1900,
        type: 'expense',
        category: 'health',
        title: 'Lab Tests and Doctor',
        id: ''
    },
    {
        title: 'Vegetables',
        category: 'food',
        date: 0,
        type: 'expense',
        amount: 250,
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        description: 'Got vegetables and fruits for this week',
        id: ''
    },
    {
        type: 'expense',
        category: 'travel',
        amount: 4400,
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        title: 'Flight ',
        description: 'Pune to Hyderabad FLight',
        date: 0,
        id: ''
    },
    {
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        category: 'travel',
        title: 'Airpot Cab',
        date: 0,
        amount: 350,
        description: 'Took a Cab to Airport ',
        type: 'expense',
        id: ''
    },
    {
        type: 'expense',
        date: 0,
        amount: 2000,
        title: 'Milk',
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        description: 'Daily Milk Payment for this month',
        category: 'daily',
        id: ''
    },
    {
        title: 'Movies',
        description: 'Went to Movies and fun',
        amount: 750,
        type: 'expense',
        category: 'leisure',
        date: 0,
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    },
    {
        title: 'Netflix Subscription',
        description: '',
        amount: 800,
        type: 'expense',
        category: 'leisure',
        date: 0,
        user: '0aegQ1IY8OZZCGUh4ShDwOXY2uQ2',
        id: ''
    }
]

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const CreateDemoDates = (numberOfDates) => {
    const currentYear = DateTime.now().toFormat('y')
    const currentMonth = DateTime.now().toFormat('L')
    const Dates = []
    let d
    for (let i = 0; i < numberOfDates;) {
        if (i < 4) {
            d = randomDate(new Date(currentYear, currentMonth-1,1), new Date()).getTime()
        } else {
            d = randomDate(new Date(currentYear - 1, currentMonth,1 ), new Date()).getTime()
        }
        if (!Dates.includes(d)) {
            i++
            Dates.push(d)
        }
    }
    return Dates
}

export const CreateDemoExpensesList = () => {
    let expensesList = []
    const dates = CreateDemoDates(DemoExepensesList.length)
    DemoExepensesList.forEach((expense, i) => {
        const newExpensesObj = { ...expense }
        newExpensesObj.date = dates[i]
        newExpensesObj.user = 'demo_user'
        newExpensesObj.id = i

        expensesList.push(newExpensesObj)
    })

    return expensesList
}

