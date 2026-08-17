 import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

function AIChat({ weather }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm your Weather AI Assistant. Ask me anything about today's weather.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    if (!API_KEY) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "❌ Gemini API Key not found.",
        },
      ]);
      return;
    }

    const userMessage = {
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const prompt = `
You are a Weather AI Assistant.

Current Weather

City: ${weather?.name}
Country: ${weather?.sys?.country}

Temperature: ${weather?.main?.temp}°C
Feels Like: ${weather?.main?.feels_like}°C
Humidity: ${weather?.main?.humidity}%
Pressure: ${weather?.main?.pressure} hPa
Wind Speed: ${weather?.wind?.speed} m/s
Visibility: ${(weather?.visibility ?? 0) / 1000} km
Condition: ${weather?.weather?.[0]?.main}
Description: ${weather?.weather?.[0]?.description}

User Question:
${message}

Answer naturally in short paragraphs.
`;

    setLoading(true);

    try {
      const result = await model.generateContent(prompt);

      const response = await result.response;

      const text = response.text();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `❌ ${error.message}`,
        },
      ]);
    }

    setLoading(false);
    setMessage("");
    
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white/15 backdrop-blur-xl rounded-3xl shadow-xl p-6">

      <h1 className="text-3xl font-bold text-white mb-6">
        🤖 Weather AI Assistant
      </h1>

      <div className="h-[450px] overflow-y-auto space-y-4 mb-6">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-white/20 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-white">
            🤖 Thinking...
          </div>
        )}

      </div>

      <div className="flex gap-3">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              sendMessage();
            }
          }}
          placeholder="Ask about today's weather..."
          className="flex-1 rounded-xl p-4 text-black outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white px-6 rounded-xl"
        >
          {loading ? "..." : "Send"}
        </button>

      </div>

    </div>
  );
}

export default AIChat;