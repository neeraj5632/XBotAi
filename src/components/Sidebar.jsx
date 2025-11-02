import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ onNewChat }) => {
  return (
    <div className="sidebar">
      <h3>Bot AI</h3>
      <a href="/">New Chat</a>
      <Link to="/history">Past Conversations</Link>
    </div>
  );
};

export default Sidebar;
