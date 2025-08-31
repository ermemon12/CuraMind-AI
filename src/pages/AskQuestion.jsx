import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AskQuestion.css";

export default function AskQuestion() {
  const [role, setRole] = useState(null);
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([{ id: 1, title: "New Chat", history: [] }]);
  const [activeChat, setActiveChat] = useState(1);
  const [startedTyping, setStartedTyping] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (!savedRole) {
      navigate("/roles");
    } else {
      setRole(savedRole);
    }
  }, [navigate]);

  const roleThemes = {
    doctor: { header: "👩‍⚕️ Doctor Mode", bg: "doctor-bg", sidebar: "sidebar-doctor" },
    patient: { header: "🩺 Patient Mode", bg: "patient-bg", sidebar: "sidebar-patient"},
    caregiver: { header: "❤️ Caregiver Mode", bg: "caregiver-bg", sidebar: "sidebar-caregiver" },
    student: { header: "📚 Student Mode", bg: "student-bg", sidebar: "sidebar-student" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    if (!startedTyping) setStartedTyping(true);

    const userMessage = { sender: "user", text: question };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setQuestion("");
    setLoading(true);

    // Update current chat history
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat ? { ...chat, history: updatedMessages } : chat
      )
    );

    // Fake AI response
    setTimeout(() => {
      const botMessage = { sender: "bot", text: `Answer: ${userMessage.text}` };
      const finalMessages = [...updatedMessages, botMessage];
      setMessages(finalMessages);
      setLoading(false);

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChat ? { ...chat, history: finalMessages } : chat
        )
      );
    }, 1500);
  };

  const handleNewChat = () => {
    const newId = chats.length + 1;
    setChats([...chats, { id: newId, title: `Chat ${newId}`, history: [] }]);
    setActiveChat(newId);
    setMessages([]);
    setStartedTyping(false);
  };

  const handleSelectChat = (id) => {
    setActiveChat(id);
    const selected = chats.find((c) => c.id === id);
    setMessages(selected ? selected.history : []);
    setStartedTyping(selected?.history.length > 0);
  };

  return (
    <div className="ask-layout">
      {/* Sidebar */}
      <div className={`history-sidebar ${roleThemes[role]?.sidebar || ""}`}>
        <div className="history-title">Your Chats</div>
        <button className="new-chat-btn" onClick={handleNewChat}>
          ＋ New Chat
        </button>
        <div className="history-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`history-item ${chat.id === activeChat ? "active" : ""}`}
              onClick={() => handleSelectChat(chat.id)}
            >
              {chat.title}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`ask-container ${roleThemes[role]?.bg || ""}`}>
        {/* Header */}
        <div className="ask-header">
          <h1>{roleThemes[role]?.header}</h1>
        </div>

        {/* Chat Window */}
        <div className="chat-window">
          {!startedTyping && messages.length === 0 ? (
            <div className="welcome-message">
              <p>{roleThemes[role]?.welcome}</p>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="typing">
                  <span></span><span></span><span></span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Input (middle if no typing yet, bottom otherwise) */}
        <form
          onSubmit={handleSubmit}
          className={`chat-input-area ${!startedTyping && messages.length === 0 ? "centered-input" : ""}`}
        >
          <textarea
            className="chat-input"
            rows="2"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onFocus={() => setStartedTyping(true)}
          />
          <button type="submit" disabled={loading} className="chat-submit-btn">
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}
