import React from "react";
import { Bot, MessageCircle } from "lucide-react";

const MessageBubble = ({ message, isBot }) => {
  return (
    <div
      className={`flex items-start gap-3 mb-4 ${
        isBot ? "" : "flex-row-reverse"
      }`}
    >
      {isBot ? (
        <Bot className="w-8 h-8 text-white mt-1" />
      ) : (
        <MessageCircle className="w-8 h-8 text-blue-300 mt-1" />
      )}
      <div
        className={`rounded-lg p-3 max-w-[80%] ${
          isBot ? "bg-white bg-opacity-10 text-white" : "bg-blue-600 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
