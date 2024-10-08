// import React from "react";
import "./styles/app.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import BudgetPlanner from "./components/BudgetPlanner";
import Reports from "./components/Reports";
import Assets from "./components/Assets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/budget-planner" element={<BudgetPlanner />} />
            <Route path="/assets" element={<Assets />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
