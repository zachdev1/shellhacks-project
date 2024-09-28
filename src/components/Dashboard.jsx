import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Financial Data",
        data: [5000, 150],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <main className="dashboard">
      <h2>Financial Overview</h2>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </main>
  );
};

export default Dashboard;
