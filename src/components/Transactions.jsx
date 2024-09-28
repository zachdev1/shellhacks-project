import { useEffect, useState } from "react";
import "../styles/transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [input, setInput] = useState({ description: "", amount: "", type: "" });
  const [editMode, setEditMode] = useState(null);
  const [editInput, setEditInput] = useState({ description: "", amount: "" });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      description: input.description,
      amount: parseFloat(input.amount),
      type: input.type,
    }
    if (newTransaction.type === "Income") {
      setTotal((prevTotal) => prevTotal + newTransaction.amount);
    } else {
      setTotal((prevTotal) => prevTotal - newTransaction.amount);
    }
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setInput({ description: "", amount: "", type: "" });
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  }

  const handleEdit = (transaction) => {
    setEditMode(transaction.id)
    setEditInput({description: transaction.description, amount: transaction.amount,});
  }

  const saveEdit = (id) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id
        ? { ...transaction, description: editInput.description, amount: parseFloat(editInput.amount) }
        : transaction
    );
    setTransactions(updatedTransactions);
    setEditMode(null); // Exit edit mode
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
      <div className="radio-group">
        <input
          type="radio" 
          name="transactionType" 
          id="transactionType" 
          value="Income"
          checked={input.type === "Income"}
          onChange={(e) => setInput({ ...input, type: e.target.value })}
        />
        <label htmlFor="">Income</label>
        <input 
          type="radio" 
          name="transactionType" 
          id="transactionType" 
          value="Expense"
          checked={input.type === "Expense"}
          onChange={(e) => setInput({ ...input, type: e.target.value })}
        />
        <label htmlFor="">Expense</label>
      </div>
        

        <button type="submit" className="transactions-submit">Add Transaction</button>
      </form>

      <div className="transaction-list">
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}
            style={{backgroundColor: transaction.type === "Income" ? "green" : "red"}}>
              {editMode === transaction.id ? (
                <>
                  <input
                    type="text"
                    value={editInput.description}
                    onChange={(e) =>
                      setEditInput({ ...editInput, description: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    value={editInput.amount}
                    onChange={(e) =>
                      setEditInput({ ...editInput, amount: e.target.value })
                    }
                    />
                    <button onClick={() => saveEdit(transaction.id)}>Save</button>
                    <button onClick={() => setEditMode(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {transaction.description}: ${transaction.amount}
                  <button className="editTransaction" onClick={() => handleEdit(transaction)}>Edit</button>
                  <button className="deleteTransaction" onClick={() => handleDelete(transaction.id)}>Delete</button>
                </>
              )}
              </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
