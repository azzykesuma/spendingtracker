import React,{ createContext, useReducer } from 'react';
import Reducer from './Reducer';

// make the initial state for the forms, this will be changed by the user input. 
const initialState = {
    transactions : []
    
}

export const GlobalContext = createContext(initialState)

// make the provider function, takes in children/whatever component it will be wrapping. 
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,initialState);

    // add the function to delete the transaction
    function DeleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
        })
    }
    function AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transaction
        })
    }
    // notice the difference between removing and adding transaction. removing takes the id of the transaction,
    // whereas adding transaction takes the whole transaction. 

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            DeleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
// then return the provider, which is part of the globalcontext. inside it, it will wrap all of the children/components
}