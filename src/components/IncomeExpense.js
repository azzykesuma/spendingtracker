import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    

    const income = (amounts
    // in order to get the amounts of income we need to : 
    .filter(item => item > 0)
    // first, filter out the items, which is greater than zero
    .reduce((acc,item) => (acc += item),0)
    )
    // then add all of the filtered item, which gives us the total amount of income
    .toFixed(2)
    // then fized the number

    const expense = (amounts
    .filter(item => item < 0 )
    .reduce((acc,item) => (acc += item),0) * -1
    ).toFixed(2)
    // the process is all the same for the expense, but the item should be less than zero and muliply that by -1 to get the minus

    return(
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p  className='money plus'>+Rp {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>-Rp {expense}</p>
        </div>
    </div>
    )
}

export default IncomeExpense;