"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! I'm RootLambda AI assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date(),
  },
];

const quickReplies = [
  "Tell me about your services",
  "I want to build an MVP",
  "What are your pricing?",
  "Talk to a human",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do")) {
      return "We offer MVP Development, Mobile Apps, AI Integration, AI Video Creation, Digital Marketing, and more! All powered by AI and delivered in days, not months. Would you like to know more about any specific service?";
    }
    if (lowerMessage.includes("mvp") || lowerMessage.includes("build")) {
      return "Great choice! We can build your MVP in just 7 days. Our full-stack development includes Next.js, authentication, database, payment integration, and AI features. Want to book a free discovery call to discuss your idea?";
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("pricing")) {
      return "Here's the exciting part - we build your AI-powered website for FREE! You only pay for hosting (~₹500-2000/month). No hidden costs, no development fees. Interested in learning more?";
    }
    if (lowerMessage.includes("human") || lowerMessage.includes("talk") || lowerMessage.includes("contact")) {
      return "Of course! You can reach us via WhatsApp for instant response, or book a free 30-minute discovery call. Visit our Contact page or I can redirect you there. We respond within 2 hours!";
    }
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to RootLambda. I'm here to help you learn about our AI-powered services. What would you like to know?";
    }
    if (lowerMessage.includes("thank")) {
      return "You're welcome! Feel free to ask if you have any other questions. We're here to help you build something amazing!";
    }

    return "Thanks for your message! I'd love to help you further. For detailed discussions, I recommend booking a free discovery call with our team. They can answer all your questions and help plan your project. Would you like me to tell you more about any of our services?";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] size-12 sm:size-14 rounded-full bg-gradient-brand shadow-elevated flex items-center justify-center text-white"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7"
        >
          <path
            fillRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            clipRule="evenodd"
          />
        </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, originX: 1, originY: 1 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                opacity: { duration: 0.2 }
              }
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                opacity: { duration: 0.15 }
              }
            }}
            className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 z-[100] sm:w-[380px] sm:h-[550px] bg-white dark:bg-bg-card rounded-2xl shadow-elevated border border-border-default flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-gradient-brand p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="size-9 sm:size-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">RootLambda AI</h3>
                  <p className="text-white/80 text-[10px] sm:text-xs flex items-center gap-1">
                    <span className="size-1.5 sm:size-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online • Replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="size-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-bg-soft dark:bg-bg-main">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-white dark:bg-bg-card text-text-primary rounded-tl-sm shadow-card"
                        : "bg-gradient-brand text-white rounded-tr-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-[10px] mt-1 ${
                        message.isBot ? "text-text-muted" : "text-white/70"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-bg-card p-3 rounded-2xl rounded-tl-sm shadow-card">
                    <div className="flex gap-1">
                      <span className="size-2 bg-text-muted rounded-full animate-bounce"></span>
                      <span className="size-2 bg-text-muted rounded-full animate-bounce [animation-delay:0.1s]"></span>
                      <span className="size-2 bg-text-muted rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-3 sm:px-4 py-2 bg-bg-soft dark:bg-bg-main border-t border-border-default">
                <p className="text-xs text-text-muted mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSendMessage(reply)}
                      className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 bg-white dark:bg-bg-card border border-border-default rounded-full text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 sm:p-4 bg-white dark:bg-bg-card border-t border-border-default">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-bg-soft dark:bg-bg-main border border-border-default rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="size-9 sm:size-10 bg-gradient-brand rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 sm:size-5"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
              <p className="text-[10px] text-text-muted text-center mt-2">
                Powered by RootLambda AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
