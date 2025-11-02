import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import ConversationHistory from "./components/ConversationHistory";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("conversations");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(history));
  }, [history]);

  const handleSaveConversation = (messages) => {
    setHistory((prev) => [...prev, messages]);
  };

  const handleNewChat = () => {
    window.location.href = "/";
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar onNewChat={handleNewChat} />
        <Routes>
          <Route
            path="/"
            element={<ChatWindow onSaveConversation={handleSaveConversation} />}
          />
          <Route
            path="/history"
            element={<ConversationHistory history={history} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
