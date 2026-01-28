"use client";

import { useState, useEffect, useRef } from "react";
import { askGemini, getChats } from "./actions";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Load history from Supabase
  useEffect(() => {
    async function load() {
      const data = await getChats();
      setMessages(data);
    }
    load();
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const answer = await askGemini(input, messages);

    setMessages(prev => [
      ...prev,
      { message: input, role: "user" },
      { message: answer, role: "ai" }
    ]);

    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-black text-white p-4 text-lg font-semibold">
        AI Chat Assistant
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm shadow 
              ${m.role === "user"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-white text-black rounded-bl-none"
              }`}
            >
              {m.message}
            </div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* INPUT BAR */}
      <div className="p-3 border-t bg-white flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>

    </div>
  );
}

