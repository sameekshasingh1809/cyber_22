import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state — loads transactions from localStorage if available
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ✅ Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  function clearAllTransactions() {
    dispatch({ type: 'CLEAR_ALL' });
    localStorage.removeItem('transactions');
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearAllTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
