import React, { useState } from "react";
import { Askgemini } from "../Services/ChatApi";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAskAI = async (e) => {
    e.preventDefault();

    if (!prompt.trim() || loading) return;

    const userPrompt = prompt.trim();

    setLoading(true);
    setError("");
    setPrompt("");

    // Display user's message immediately
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userPrompt },
    ]);

    try {
      const reply = await Askgemini(userPrompt);

      // Display AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: reply },
      ]);
    } catch (err) {
      console.error("Error asking AI:", err);

      setError(
        err.response?.data?.error?.message ||
          err.response?.data?.error ||
          err.message ||
          "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-indigo-600 text-white px-4 py-3">
          <h2 className="font-semibold text-base">Gen AI</h2>
          <p className="text-xs text-indigo-200">Online</p>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 p-3 rounded-2xl shadow-sm text-sm">
              Hello! How can I help you today?
            </div>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-2xl text-sm max-w-[80%] break-words ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800 shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl text-sm shadow-sm">
                AI is thinking...
              </div>
            </div>
          )}

          {error && <div className="text-red-600 text-sm">{error}</div>}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-200">
          <form onSubmit={handleAskAI} className="flex items-center space-x-2">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              placeholder="Ask anything..."
              className="flex-1 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
