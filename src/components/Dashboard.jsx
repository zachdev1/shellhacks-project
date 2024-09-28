import React from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="widget">
        <h2>Total Income</h2>
        <p>$10,000</p>
      </div>
      <div className="widget">
        <h2>Total Expenses</h2>
        <p>$5,000</p>
      </div>
      <div className="widget">
        <h2>Savings</h2>
        <p>$2,000</p>
      </div>
    </main>
  );
};

export default Dashboard;
