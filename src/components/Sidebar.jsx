import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {

  const [sidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!sidebarOpen);
  };


  return (
    <div>
    <button className="sidebarToggle" onClick={toggleSidebar}>Toggle</button>
    {sidebarOpen && (
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
    )}
    </div>
    
  );
};

export default Sidebar;
