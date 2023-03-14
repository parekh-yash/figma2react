import React from "react";
import "../css/dashboard.css";
import Maincontent from "./components/DashboardContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Dashboard() {
  const userName = "Yash Parekh";
  return (
    <>
      <div className="wrapper">
        <Navbar userName={userName} />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Maincontent />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
