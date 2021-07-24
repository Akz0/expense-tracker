export const SortByDateDescending=(expensesList)=>{
    let expenseItem
    let updatedExpensesList = expensesList;
    let numberOfExpenses = updatedExpensesList.length
    for (let i = 0; i < numberOfExpenses; i++) {
        for (let j = 0; j < numberOfExpenses - i - 1; j++) {
            if (updatedExpensesList[j].date < updatedExpensesList[j + 1].date) {
                expenseItem = updatedExpensesList[j];
                updatedExpensesList[j] = updatedExpensesList[j + 1];
                updatedExpensesList[j + 1] = expenseItem;
            }
        }
    }
    
    return updatedExpensesList
}