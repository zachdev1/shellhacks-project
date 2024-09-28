import { useState } from "react";
import "../styles/transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [input, setInput] = useState({ description: "", amount: "" });

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      description: input.description,
      amount: parseFloat(input.amount),
    };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setInput({ description: "", amount: "" });
  };

  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <form onSubmit={addTransaction}>
        <input
          type="text"
          placeholder="Description"
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={input.amount}
          onChange={(e) => setInput({ ...input, amount: e.target.value })}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
