import React, { useContext } from 'react';
import { GlobalContext, GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

function App() {
  // ✅ useContext should be here — before return
  const { clearAllTransactions } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

        {/* ✅ Proper placement of button */}
        <button className="clear-btn" onClick={clearAllTransactions}>
          Clear All Transactions
        </button>
      </div>
    </GlobalProvider>
  );
}

export default App;
