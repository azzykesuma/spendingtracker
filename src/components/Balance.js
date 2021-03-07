import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    // this variable is to take all of the content of amount in transaction array. 
    const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2);
    // after that, define a variable to add all of the amount. we can use reduce(). 
    // to fixed is to fix the decimal number, and the number inside the braces is to define how many numbers after comma are there. 

    return (
        <>
            <h4>Your Balance</h4>
            <h1>Rp.{total}</h1>
        </>
    )
}

export default Balance;