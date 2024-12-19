class ChatbotService {
  constructor() {
    this.responses = {
      hello: "Hi there! How can I help you today?",
      help: "I can help you with common issues, FAQs, and troubleshooting steps. What do you need assistance with?",
      password:
        'To reset your password, please follow these steps:\n1. Click on "Forgot Password"\n2. Enter your email\n3. Follow the instructions sent to your email',
      login:
        "If you're having trouble logging in, please try:\n1. Clearing your browser cache\n2. Checking caps lock\n3. Using the password reset option if needed",
      contact:
        "You can reach our support team at support@example.com or call us at 1-800-SUPPORT",
      hours: "Our support team is available 24/7 to assist you",
      pricing:
        "We offer several pricing tiers. Basic: $10/mo, Pro: $25/mo, Enterprise: Custom pricing",
      account:
        "For account-related issues, please provide your account email and the specific problem you're experiencing",
      bug: "Please provide the following details about the bug:\n1. What you were doing\n2. What happened\n3. What you expected to happen",
      feature:
        "To request a new feature, please submit it through our feedback portal or email it to features@example.com",
    };
  }

  generateResponse(message) {
    const lowercaseMessage = message.toLowerCase();

    // Check for keyword matches
    for (const [keyword, response] of Object.entries(this.responses)) {
      if (lowercaseMessage.includes(keyword)) {
        return response;
      }
    }

    // Default response
    return "I'm not sure about that. Could you please rephrase your question or contact our support team for more specific assistance?";
  }
}

module.exports = new ChatbotService();
