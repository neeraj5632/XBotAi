import React, { useState } from "react";
import sampleData from "../data/sampleData";
import FeedbackForm from "./FeedbackForm";
//simport "./ChatWindow.css";

const ChatWindow = ({ onSaveConversation }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const aiResponse =
      sampleData[input] || "Sorry, Did not understand your query!";
    const botMessage = { sender: "bot", text: aiResponse };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleSave = () => {
    onSaveConversation(messages);
    setShowFeedback(true);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>How Can I Help You Today?</h2>
        <span className="ai-icon">🌐</span>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
            {msg.sender === "bot" && (
              <div className="feedback-buttons">
                <button>👍</button>
                <button>👎</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showFeedback && <FeedbackForm />}

      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          placeholder="Message Bot AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
