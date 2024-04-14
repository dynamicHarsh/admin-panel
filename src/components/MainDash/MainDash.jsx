import React from "react";
import Cards from "../Cards/Cards";
import QuickAction from "../QuickAction/QuickAction"
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <h1>Quick Actions</h1>
      <QuickAction/>
    </div>
  );
};

export default MainDash;
