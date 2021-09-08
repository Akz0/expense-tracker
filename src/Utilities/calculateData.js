export const CalculateTotalOverTime = (data) => {

    const TotalOverTime = []
    data.forEach(expense => {
        const dataObj = {
            date: expense.date,
            amount: expense.amount
        }
        TotalOverTime.push(dataObj)
    })

    TotalOverTime.sort((a, b) => {
        return a.date - b.date
    })

    return TotalOverTime
}

export const CalculateCategoryWiseOverTime = (data) => {

    const CategoryExpenseOverTime = {
        food: [],
        bills: [],
        finance: [],
        travel: [],
        daily: [],
        clothing: [],
        utilities_repairs: [],
        health: [],
        others: [],
        leisure: [],
    }

    const TotalCategoryOverTime = {
        food: 0,
        bills: 0,
        finance: 0,
        travel: 0,
        daily: 0,
        clothing: 0,
        utilities_repairs: 0,
        health: 0,
        others: 0,
        leisure: 0,
    }

    data.forEach(expense => {
        if (expense.type !== 'income') {
            const dataObj = {
                date: expense.date,
                amount: expense.amount
            }
            CategoryExpenseOverTime[expense.category].push(dataObj)
            TotalCategoryOverTime[expense.category] += expense.amount
        }
    })
    return [TotalCategoryOverTime, CategoryExpenseOverTime]

}
