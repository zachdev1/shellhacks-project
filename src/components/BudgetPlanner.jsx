import { useState } from "react";
import "../styles/budgetPlanner.css";

const BudgetPlanner = () => {
  const [budget, setBudget] = useState(5000); // Example budget
  const [input, setInput] = useState("");

  const updateBudget = (e) => {
    e.preventDefault();
    setBudget(parseFloat(input));
    setInput("");
  };

  return (
    <div className="budget-planner">
      <h3>Budget Planner</h3>
      <p>Current Budget: ${budget}</p>
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
