import React, { useState, useContext, useRef  } from "react";
import "./LexaChatbot.css"; // Add styles separately
import { TriageContext } from "../context/TriageContext";

import axios from "axios";

const LexaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "lexa",
      text: `Hi, I'm Lexa. Not sure what's going on?I'll help you decide which tests to get and who to talk to for the right treatment - quickty and confidentially.<br>Everything you say is private. I'll just ask a few personal questions to help figure out what test are most appropriate.`,
    },
  ]);
  const [input, setInput] = useState("");
  const apiRAGModle = process.env.REACT_APP_API_RAGModule;
  const toggleChat = () => setIsOpen(!isOpen);
  const { triageSections, getByApp } = useContext(TriageContext);
  const stindrItem = getByApp("Stindr")[0];
  const triageId = stindrItem?.id;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chatHistory, setChatHistory] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") chatLexaModal();
  };

  const chatLexaModal = async () => {
    if (input.trim() === "") return;
    let currentMessageInput = input;
    setInput("");

    if (currentMessageInput.trim()) {
      const newUserMessage = {
        id: Date.now(),
        text: currentMessageInput,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    } else {
      currentMessageInput = "hi";
    }

    setLoading(true);
    setError(null);

    try {
      const reportUrl = `${apiRAGModle}/TriageAgent`;
      const response = await axios.post(reportUrl, {
        triageId: triageId,
        patientId: null,
        query: currentMessageInput,
        chatHistory: chatHistory,
      });
      if (response.data.isSuccess) {
        setChatHistory(response.data.chatHistory);

        const botResponseText = response.data.data;
        if (botResponseText) {
          const newBotMessage = {
            id: Date.now() + 1,
            text: botResponseText,
            sender: "lexa",
          };
          setMessages((prevMessages) => [...prevMessages, newBotMessage]);
        }
      } else {
        setError(response.data.message || "An error occurred during API call.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to get a response from Lexa. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`lexa-chatbox ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <strong>Take Help from Lexa</strong>
          <button className="btn-close" onClick={toggleChat}></button>
        </div>
        <div className="chat-body">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.sender === "user" ? "user" : "lexa"}`}
            >
              <span
                style={{
                  padding: "8px 12px",
                  borderRadius: "15px",
                  display: "inline-block",
                  maxWidth: "75%",
                  wordBreak: "break-word",
                }}
                dangerouslySetInnerHTML={{
                  __html: msg.text.replace(/\n/g, "<br>"),
                }}
              ></span>
            </div>
          ))}
          {loading && <p>Loading chat...</p>}
          {error && <p className="text-danger">{error}</p>}
          <div ref={messages} />
        </div>
        <div className="chat-footer">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={chatLexaModal}>
            Send
          </button>
        </div>
      </div>

      {/* Toggle button */}
      {!isOpen && (
        <button className="lexa-toggle-button" onClick={toggleChat}>
          💬 Lexa
        </button>
      )}
    </>
  );
};

export default LexaChatbot;
