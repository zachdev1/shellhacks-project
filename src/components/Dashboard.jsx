import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const budget = localStorage.getItem("budget");
  const total = localStorage.getItem("total");
  const income = localStorage.getItem("income");
  const expenses = localStorage.getItem("expenses");
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Financial Data",
        data: [income, expenses],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <main className="dashboard">
      <h2>Financial Overview</h2>
      <p>Current Budget: ${budget}</p>
      <p>Current Total: ${total}</p>
      <p>Current Income: ${income}</p>
      <p>Current Expenses: ${expenses}</p>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </main>
  );
};

export default Dashboard;
