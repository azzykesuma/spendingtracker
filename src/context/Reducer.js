export default (state,action) => {
    switch(action.type) {
        case 'ADD_TRANSACTIONS' : 
        return {
            ...state,
            transactions: [
                action.payload,...state.transactions
            ]
        }
        // spread the operator to take all of the previous state
        // transactions defined as an array, which takes the action.payload/the additional transaction
        // and the existing state.transactions. 
        case 'DELETE_TRANSACTIONS' :
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            // first, spread the state operator so that it shows all of the children
            // filter the transactions. the filter is checking the id between the transaction.id and the action.payload which contain the id
        default : 
        return state;
    }
}