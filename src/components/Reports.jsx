import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/reports.css";

const data = [
  { name: "January", income: 4000, expenses: 2400 },
  { name: "February", income: 3000, expenses: 1398 },
  { name: "March", income: 2000, expenses: 9800 },
  { name: "April", income: 2780, expenses: 3908 },
];

const Reports = () => {
  return (
    <div className="reports">
      <h2>Financial Reports</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4caf50" />
          <Bar dataKey="expenses" fill="#ff0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reports;
