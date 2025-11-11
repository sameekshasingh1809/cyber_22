import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';


function AppContent() {
  const { clearAllTransactions } = useContext(GlobalContext);

  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />

      <button className="clear-btn" onClick={clearAllTransactions}>
        Clear All Transactions
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <AppContent />
    </div>
  );
}

export default App;

