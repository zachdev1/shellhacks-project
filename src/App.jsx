import React from "react";
import "./app.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
