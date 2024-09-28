import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/budgetPlanner.css";

const BudgetPlanner = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const updateBudget = (e) => {
    e.preventDefault();
    localStorage.setItem("budget", parseFloat(input))
    setInput("");
    navigate("/dashboard")
  };

  return (
    <div className="budget-planner">
      <h3>Budget Planner</h3>
      <p>Current Budget: ${localStorage.getItem("budget")}</p>
      <form onSubmit={updateBudget}>
        <input
          type="number"
          placeholder="New Budget"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Update Budget</button>
      </form>
    </div>
  );
};

export default BudgetPlanner;
