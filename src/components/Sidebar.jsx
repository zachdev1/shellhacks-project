import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Budget Planner</li>
        <li>Reports</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
