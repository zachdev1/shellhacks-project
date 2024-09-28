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
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    const storedTotal = localStorage.getItem("total");
    if (storedTotal) {
      setTotal(parseFloat(storedTotal));
    }
  }, []);

  useEffect(() => {
    const storedIncome = localStorage.getItem("income") ;
    if (storedIncome) {
      setIncome(parseFloat(storedIncome));
    }
  }, []);
  
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses") ;
    if (storedExpenses) {
      setExpenses(parseFloat(storedExpenses));
    }
  }, []);

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      description: input.description,
      amount: parseFloat(input.amount),
      type: input.type,
    }

    let updatedTotal, updatedIncome = income, updatedExpenses = expenses;
    if (newTransaction.type === "Income") {
      updatedTotal = total + newTransaction.amount;
      updatedIncome = income + newTransaction.amount
    } else {
      updatedTotal = total - newTransaction.amount;
      updatedExpenses = expenses + newTransaction.amount;
    }
    
    setTotal(updatedTotal);
    setIncome(updatedIncome);
    setExpenses(updatedExpenses);

    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    localStorage.setItem("total", updatedTotal);
    localStorage.setItem("income", updatedIncome);
    localStorage.setItem("expenses", updatedExpenses);
    setInput({ description: "", amount: "", type: "" });
  };

  const handleDelete = (id) => {
    const transactionToDelete = transactions.find((transaction) => transaction.id === id)

    let updatedTotal = total;
    let updatedIncome = income;
    let updatedExpenses = expenses;

    if (transactionToDelete.type === "Income") {
      updatedTotal -= transactionToDelete.amount;
      updatedIncome -= transactionToDelete.amount;
    } else {
      updatedTotal += transactionToDelete.amount;
      updatedExpenses -= transactionToDelete.amount;
    }

    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
    setTotal(updatedTotal);
    setIncome(updatedIncome);
    setExpenses(updatedExpenses);

    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    localStorage.setItem("total", updatedTotal);
    localStorage.setItem("income", updatedIncome);
    localStorage.setItem("expenses", updatedExpenses);
  }

  const handleEdit = (transaction) => {
    setEditMode(transaction.id)
    setEditInput({description: transaction.description, amount: transaction.amount,});
  }

  const saveEdit = (id) => {

    const transactionToEdit = transactions.find((transaction) => transaction.id === id);

    let updatedTotal = total;
    let updatedIncome = income;
    let updatedExpenses = expenses;

    if (transactionToEdit.type === "Income") {
      updatedTotal -= transactionToEdit.amount;
      updatedIncome -= transactionToEdit.amount;
    } else {
      updatedTotal += transactionToEdit.amount;
      updatedExpenses -= transactionToEdit.amount;
    }

    if (editInput.type === "Income") {
      updatedTotal += parseFloat(editInput.amount);
      updatedIncome += parseFloat(editInput.amount);
    } else {
      updatedTotal -= parseFloat(editInput.amount);
      updatedExpenses += parseFloat(editInput.amount);
    }

    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id
        ? { ...transaction, description: editInput.description, amount: parseFloat(editInput.amount) }
        : transaction
    );
    setTransactions(updatedTransactions);
    setTotal(updatedTotal);
    setIncome(updatedIncome);
    setExpenses(updatedExpenses);

    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    localStorage.setItem("total", updatedTotal);
    localStorage.setItem("income", updatedIncome);
    localStorage.setItem("expenses", updatedExpenses);
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
      <p>Total: {total}</p>
    </div>
  );
};

export default Transactions;
