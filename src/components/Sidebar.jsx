import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/budget-planner">Budget Planner</Link>
        </li>
        <li>
          <Link to="/assets">Assets</Link>
        </li> 
        <li>
          <Link to="/reports">*Reports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
