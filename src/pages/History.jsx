// ChatHistoryPage.jsx
import React, { useState, useEffect } from "react";
import "./History.css"; // We'll add some simple CSS

const ChatHistoryPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load past chat from localStorage on mount
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("healthcareChat")) || [];
    setMessages(savedMessages);
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("healthcareChat", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response (replace this with real API call)
    const aiResponse = await getAIResponse(input);
    setMessages((prev) => [...prev, userMessage, { type: "ai", text: aiResponse }]);
  };

  // Dummy AI response function for now
  const getAIResponse = async (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`AI Response to: "${text}"`);
      }, 1000);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-container">
      <h2>Healthcare AI Chat</h2>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.type === "user" ? "user-message" : "ai-message"}`}
          >
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatHistoryPage;
