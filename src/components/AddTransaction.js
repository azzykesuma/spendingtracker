import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const { AddTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 1000000),
            text,
            // same as text: text
            amount: +amount
            // you need to change the amount from string to number by adding + to amount
            // otherwise, all of the method such as reduce,filter,tofixed will be considered not a function
        }
        AddTransaction(newTransaction)
        
        
    }
    // to add a new transaction, we need to make the onsubmit function. 
    // add prevent default to prevent the button to refresh the UI,
    // then make a new variable to store all of the element in the object. 
    // since id must be unique, then we can use math random to generate that, and add text and amount
    // the add the function to add the transaction, pass down the new transaction as the param
    return (
        <>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Title</label>
                <input type='text' value = {text} onChange={(e) => setText(e.target.value)}  placeholder='Enter your transaction...' />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount...'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
        </>
    )
}

export default AddTransaction;