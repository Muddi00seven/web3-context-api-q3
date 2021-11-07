import './App.css';
import React from 'react';
import { useStore } from './context/globalState';
import TransactionList from './components/transactionList';
import AddTransaction from './components/addTransaction';
import Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeExpenses'
function App() {

  const [{ post, web3, contract, accounts, transactions }, dispatch] = useStore();
  return (
    <div className="container">
      <Header />
      <Balance/>
      <IncomeExpenses/>
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
