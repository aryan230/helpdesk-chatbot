const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const chatbotService = require("../services/chatbot");

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Save user message
    const userMessage = new Message({
      text: message,
      isBot: false,
    });
    await userMessage.save();

    // Generate and save bot response
    const botResponse = chatbotService.generateResponse(message);
    const botMessage = new Message({
      text: botResponse,
      isBot: true,
    });
    await botMessage.save();

    res.json({ message: botResponse });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
