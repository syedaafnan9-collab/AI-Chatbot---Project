import { GoogleGenAI } from "@google/genai";
export const handlechat = async (req, res) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { prompt } = req.body;

    const aireponse = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });
    res.json({ reply: aireponse.text });
  } catch (err) {
    console.error("Error in handlechat:", err);
    res.status(500).json({ error: err.message });
  }
};
export default handlechat;
