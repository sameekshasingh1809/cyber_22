import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) return alert('Please enter both text and amount!');

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
    setCategory('Other');
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
