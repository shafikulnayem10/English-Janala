# 📘 English-Janala

**English-Janala** is a modern, beginner-friendly English learning platform designed to help users improve vocabulary through structured lessons, search functionality, and interactive UI.
Built using core web technologies, the project focuses on **user experience, dynamic content rendering, and scalable UI design**.

---

## 🔗 Live Demo

👉 https://my-english-janala-web-app.netlify.app/

---

## 🎯 Project Goal

The goal of this project was to design a simple yet effective vocabulary learning system that:

- Helps users learn English words in a structured way
- Provides quick access to word meanings through search
- Enhances learning with interactive UI elements
- Maintains smooth performance and responsiveness

This project demonstrates how educational platforms can be built using **frontend technologies with dynamic behavior**.

---

## ✨ Key Features

- 🔐 Simple login authentication (demo-based)
- 📚 Lesson-based vocabulary organization
- 🔍 Real-time word search functionality
- 🧠 Detailed word view using modal
- ⏳ Loading spinner for improved user experience
- 📱 Fully responsive across all devices
- 🎨 Clean and modern UI design
- 🤖 **AI-powered chat assistant (Rahman — English Teacher)**

---

## 🤖 AI Chat Assistant — Rahman

One of the standout features of English Janala is **Rahman**, an AI-powered English teacher built directly into the platform.

### 💬 How It Works

A floating chat button sits in the bottom-right corner of the screen. Clicking it opens a chat panel where students can have a **one-on-one tutoring session** with Rahman in real time.

### 🎓 What Rahman Can Do

| Feature | Description |
|---|---|
| 📖 Vocabulary Help | Explains word meanings, pronunciation, and usage |
| ✍️ Example Sentences | Provides natural, contextual sentence examples |
| 📐 Grammar Support | Explains grammar rules in simple, beginner-friendly terms |
| 🗣️ Conversation Practice | Engages students in English conversation with follow-up questions |
| 🇧🇩 Bangla Support | Responds with Bangla explanations when needed |
| 🧠 Memory | Remembers the full conversation across the session via localStorage |

### 🧩 Technical Details

- **Backend:** Cloudflare Workers (serverless, no API key needed on frontend)
- **AI Model:** Google Gemma 2 (9B)
- **Markdown Rendering:** marked.js for clean formatted responses
- **Chat Persistence:** localStorage saves full conversation history
- **Persona:** Custom system prompt defines Rahman's personality, teaching style, formatting rules, and safety boundaries

### 🔒 Safety Rules

Rahman is designed to stay focused on English learning. He will politely redirect any questions unrelated to language learning (e.g. politics, programming, harmful content).

---

## 🧠 How It Works (Technical Breakdown)

- Implemented **authentication logic** using predefined credentials
- Organized vocabulary into **lesson-based structured data**
- Used **JavaScript DOM manipulation** to dynamically render content
- Implemented **search filtering logic** for fast word lookup
- Used **modal components** to display detailed word information
- Managed UI states such as loading, filtering, and interaction flow
- Integrated **AI chat** via Cloudflare Worker with a custom system prompt

---

## ⚙️ Tech Stack (With Justification)

| Technology | Why It Was Used |
|---|---|
| HTML5 | Provides structured and semantic layout |
| CSS3 | Handles custom styling and layout control |
| Tailwind CSS + DaisyUI | Rapid UI development with consistent design |
| JavaScript (Vanilla) | Implements logic, dynamic rendering, and interactivity |
| Cloudflare Workers | Serverless AI backend — no server setup required |
| Google Gemma 2 (9B) | Lightweight, fast language model for tutoring responses |
| marked.js | Renders Markdown formatting in chat responses |

---

## 🧩 Problem-Solving Highlights

- 🔐 **Authentication Handling:** Built login system without backend
- 🔍 **Search Optimization:** Implemented efficient filtering logic
- 🧠 **Dynamic Content Rendering:** Updated UI based on lesson selection
- ⏳ **Loading State Management:** Improved UX with visual feedback
- 📱 **Responsive Design:** Ensured usability across different devices
- 🤖 **AI Integration:** Connected a serverless AI backend without exposing any API keys
- 🎭 **Prompt Engineering:** Designed a detailed system prompt to shape Rahman's teaching persona, response format, and safety rules

---

## 📈 Impact & Results

- 📚 Created an intuitive vocabulary learning experience
- ⚡ Improved usability with real-time interactions
- 📱 Delivered a responsive and accessible UI
- 🧱 Built a scalable structure for future backend/API integration
- 🤖 Added AI-powered tutoring — making learning feel personal and interactive

---

## 🚀 Getting Started

### 🔑 Demo Credentials

```
Email:    dummy@gmail.com
Password: 123456
```

