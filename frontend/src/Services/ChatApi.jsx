import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const Askgemini = async (prompt) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chats`, { prompt });
    return response.data.reply;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export const addItem = async (name) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, { name });
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};