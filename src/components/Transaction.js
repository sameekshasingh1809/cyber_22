import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <div>
        <strong>{transaction.text}</strong> <br />
        <small>{transaction.category} • {transaction.date}</small>
      </div>
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};
