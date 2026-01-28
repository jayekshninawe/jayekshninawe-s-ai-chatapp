"use server";

import { GoogleGenAI } from "@google/genai";
import { supabase } from "@/lib/supabase/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askGemini(prompt, history) {
  // Convert DB history to Gemini format
  const contents = history.map(msg => ({
    role: msg.role === "ai" ? "model" : "user",
    parts: [{ text: msg.message }],
  }));

  contents.push({ role: "user", parts: [{ text: prompt }] });

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
  });

  const answer = result.text;

  // Save USER message
  await supabase.from("chats").insert([
    { user_id: "test-user", message: prompt, role: "user" }
  ]);

  // Save AI message
  await supabase.from("chats").insert([
    { user_id: "test-user", message: answer, role: "ai" }
  ]);

  return answer;
}

export async function getChats() {
  const { data } = await supabase
    .from("chats")
    .select("*")
    .eq("user_id", "test-user")
    .order("created_at");

  return data || [];
}
