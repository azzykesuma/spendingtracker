import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { DeleteTransaction } = useContext(GlobalContext)
    // there are two ways to catch the passed down props, which is using props.transaction.text
    // or destructure it { transaction }. you need to catch the props, otherwise it will return undefined

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}Rp.{Math.abs(transaction.amount)}</span>
            {/* Math.abs for displaying only the absolute number */}
            <button onClick={() => DeleteTransaction(transaction.id)} className='delete-btn'>x</button></li>
        </>
    )    
}

export default Transaction; 