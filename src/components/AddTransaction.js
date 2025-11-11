import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (text.trim() === '' || amount === '') {
      alert('Please enter both text and amount!');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      alert('Please enter a valid numeric amount!');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parsedAmount,
      category,
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
    };

    addTransaction(newTransaction);

    // Reset form fields
    setText('');
    setAmount('');
    setCategory('Other');
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            step="any"
            required
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

        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

