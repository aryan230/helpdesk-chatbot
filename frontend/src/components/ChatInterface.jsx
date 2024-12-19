import React, { useState, useRef, useEffect } from "react";
import { Send, Bot } from "lucide-react";
import { sendMessage } from "../api/chatApi";
import MessageBubble from "./MessageBubble";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your HelpDesk assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await sendMessage(inputMessage);
      const botResponse = {
        id: messages.length + 2,
        text: response.message,
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-semibold text-white">
            HelpDesk Assistant
          </h1>
        </div>

        <div className="bg-white bg-opacity-5 rounded-lg p-4 h-[500px] overflow-y-auto mb-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message.text}
              isBot={message.isBot}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 flex items-center gap-2 transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            <Send className="w-5 h-5" />
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
