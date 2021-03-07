import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    
    return(
        <>
        <h3>History</h3>
        <ul className='list'>
            {
            transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>)
            // for a listed items to be properly passed down as a props, it needs a key.
            // then, pass down the props (transaction). 
            )}
        </ul>
        </>
    )
}

export default TransactionList;