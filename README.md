# 🤖 AI Chatbot

An AI-powered chatbot built using **React.js, Node.js, Express.js and Google Gemini API**. It allows users to enter prompts and receive AI-generated responses through a clean and interactive chat interface.

## 🌐 Live Demo

**[View Live Projec]
(https://chatbot-aiproject.netlify.app)**

## 📸 Project Overview

AI Chatbot is a full-stack web application that connects a React frontend with a Node.js and Express backend to generate responses using Google's Gemini API.

## ✨ Features

- Interactive chatbot interface
- Real-time AI-generated responses
- Integration with Google Gemini API
- Loading indicator while AI generates a response
- Error handling for API failures
- Responsive user interface
- Secure API key management using environment variables

## 🛠️ Technologies Used

**Frontend**
- React.js
- JavaScript
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Google Gemini API
- Google GenAI SDK
- dotenv
- CORS

## 📁 Project Structure

```text
AI-Chatbot/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── route/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd AI-Chatbot---Project
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

## 🔄 How It Works

1. User enters a prompt in the React chatbot interface.
2. Axios sends the prompt to the Express backend.
3. Express routes the request to the chat controller.
4. The controller sends the prompt to the Gemini API.
5. Gemini generates an AI response.
6. The backend sends the response back to React.
7. React displays the response in the chat interface.

## 🔐 Environment Variables

API keys and database credentials are stored in environment variables and are not included in the public repository.

## 🚀 Future Improvements

- Persistent chat history using MongoDB
- User authentication
- Multiple conversation sessions
- Improved chat interface and mobile responsiveness

## 👩‍💻 Developer

**Syeda Afnan**

GitHub: [@syedaafnan9-collab](https://github.com/syedaafnan9-collab)

---

⭐ If you find this project interesting, feel free to explore the repository!
