import React from "react";
import "./ConversationHistory.css";

const ConversationHistory = ({ history }) => {
  return (
    <div className="history-container">
      <h2>Conversation History</h2>
      {history.length === 0 ? (
        <p>No saved conversations.</p>
      ) : (
        history.map((conv, idx) => (
          <div key={idx} className="conversation">
            {conv.map((msg, i) => (
              <p key={i} className={msg.sender}>
                {msg.text}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default ConversationHistory;
