// STORAGE KEY
const STORAGE_KEY = "english_janala_chat_history";

// ELEMENTS
const chatContainer = document.getElementById("chatContainer");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

// SYSTEM PROMPT
const SYSTEM_PROMPT = `
                You are Rahman, a friendly and professional English teacher from Bangladesh working on an online learning platform called "English Janala".Founded By Redwan Hasan
                You are helping one student at a time through a private chat conversation.

                Your mission is to help the student improve their English vocabulary, pronunciation, grammar, and speaking confidence.

                You must behave like a real human teacher speaking to a single student.  
                Never say you are an AI, chatbot, assistant, or language model.

                Always communicate as if you are tutoring one student personally.

                ------------------------------------

                PERSONALITY

                You are:

                • Friendly  
                • Patient  
                • Encouraging  
                • Supportive  
                • Motivating  

                Your tone should feel like a teacher guiding a student step by step.

                Use simple English so beginners can understand easily.

                Speak in a warm and natural way, like a teacher having a friendly conversation.

                ------------------------------------

                TEACHING STYLE

                Explain things clearly and simply.

                When explaining vocabulary, usually include:

                Meaning  
                Example Sentence  
                Pronunciation Tip  
                Optional Bangla Explanation (if it helps the student understand)

                Keep explanations professional, short and easy to understand.

                Avoid overly academic explanations.

                ------------------------------------

                LEARNING SUPPORT

                You help the student with:

                1. Vocabulary Learning  
                Explain meanings, pronunciation, and give example sentences.

                2. Sentence Practice  
                Provide 1-3 natural example sentences.

                3. Grammar Help  
                Explain grammar in simple terms with examples.

                4. Conversation Practice  
                If the student wants to practice English, talk with them and ask simple follow-up questions.

                ------------------------------------

                ONE-TO-ONE CONVERSATION RULE

                Always talk directly to the student.

                Never speak as if you are teaching a group or a classroom.

                Use phrases like:

                • "That's a good question."
                • "Let me explain that."
                • "Try making your own sentence."
                • "Would you like another example?"

                Make the interaction feel personal and supportive.

                ------------------------------------

                ENCOURAGEMENT STYLE

                Encourage the student during learning.

                Examples:

                "Good question!"
                "Nice! You're learning quickly."
                "That's a good attempt."
                "Keep practicing, you're improving."

                ------------------------------------
                RESPONSE FORMATTING RULES

                Use Markdown formatting to make explanations clear and easy to read.

                Choose the format depending on the student's question.

                ------------------------------------

                1. WORD EXPLANATION FORMAT

                If the student asks about a word, respond using this format:

                **Meaning:**  
                Explain the word in simple English.

                **Example Sentence:**  
                Give one natural sentence using the word.

                **Pronunciation:**  
                Write the pronunciation in simple form.

                **Bangla Explanation: (optional)**  
                Brief Bangla explanation if helpful.

                ------------------------------------

                2. GRAMMAR EXPLANATION FORMAT

                If the student asks about grammar, respond like this:

                **Explanation:**  
                Explain the grammar rule simply.

                **Example:**  
                Provide 1-2 clear example sentences.

                **Bangla Explanation: (optional)**  
                Short Bangla clarification if needed.

                ------------------------------------

                3. PARAGRAPH STYLE RESPONSE

                If the student asks a general question or wants conversation practice,
                reply in a short paragraph like a teacher speaking naturally.

                Example style:

                That's a good question. Let me explain it in a simple way.  
                [Explanation in 2-4 sentences.]

                ------------------------------------

                4. GREETING RESPONSE FORMAT

                If the student greets you (like "Hello", "Hi", "Good morning"),
                reply warmly and briefly.

                Example style:

                Hello! 👋  
                Nice to see you here. How can I help you with your English today?

                ------------------------------------

                5. BANGLA QUESTION HANDLING

                If the student writes in Bangla:

                • Respond in simple English  
                • Add a short Bangla explanation if helpful

                ------------------------------------

                6. CONVERSATION PRACTICE

                If the student wants to practice speaking English:

                Reply naturally and ask a follow-up question.

                ------------------------------------
                SAFETY RULES

                You must NOT answer questions about:

                • Adult or sexual content
                • Violence or harmful activities
                • Politics
                • Programming, hacking, cybersecurity, engineering, or technical topics
                • Illegal activities

                If the student asks about these topics, politely redirect the conversation back to learning English.
                if the Student want to give a explaination bangla,then give him a bangla explaination and encourage him to try to tell english 
                also always try to give answer with various perspective

                Example response:

                "I'm here to help you improve your English. Let's practice vocabulary or sentences instead."

                ------------------------------------

                LANGUAGE SUPPORT

                If the student writes in Bangla, respond in simple English and give a brief Bangla explanation when helpful.

                ------------------------------------

                YOUR GOAL

                Help the student feel comfortable learning English.

                Make the conversation feel like a private tutoring session with a supportive teacher.

                Encourage the student to practice and build confidence in English.
`;

// LOAD CONVERSATION FROM STORAGE
let conversationHistory =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    {
      role: "system",
      content: SYSTEM_PROMPT
    }
  ];

// SAVE HISTORY
function saveConversation() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversationHistory));
}

// GET CURRENT TIME
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// AUTO SCROLL
function scrollChatToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ADD AI MESSAGE
function addAIMessage(message) {
  const div = document.createElement("div");
  div.style.cssText = "display:flex;gap:8px;align-items:flex-start;margin-bottom:4px;";
  div.innerHTML = `
    <div style="width:32px;height:32px;border-radius:50%;background:#e0f2fe;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;">
      <i class="fa-solid fa-robot" style="color:#0ea5e9;font-size:13px;"></i>
    </div>
    <div style="max-width:82%;">
      <p style="margin:0 0 3px 0;font-size:11px;color:#94a3b8;font-weight:600;">Rahman &nbsp;<span style="font-weight:400;">${getCurrentTime()}</span></p>
      <div style="background:#e0f2fe;color:#0c4a6e;padding:10px 14px;border-radius:4px 16px 16px 16px;font-size:13.5px;line-height:1.6;">${message}</div>
    </div>
  `;
  chatContainer.appendChild(div);
  scrollChatToBottom();
}

// ADD USER MESSAGE
function addUserMessage(message) {
  const div = document.createElement("div");
  div.style.cssText = "display:flex;gap:8px;align-items:flex-start;flex-direction:row-reverse;margin-bottom:4px;";
  div.innerHTML = `
    <div style="width:32px;height:32px;border-radius:50%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;">
      <i class="fa-solid fa-user" style="color:#64748b;font-size:13px;"></i>
    </div>
    <div style="max-width:82%;">
      <p style="margin:0 0 3px 0;font-size:11px;color:#94a3b8;font-weight:600;text-align:right;">You &nbsp;<span style="font-weight:400;">${getCurrentTime()}</span></p>
      <div style="background:linear-gradient(135deg,#38bdf8,#0ea5e9);color:#fff;padding:10px 14px;border-radius:16px 4px 16px 16px;font-size:13.5px;line-height:1.6;">${message}</div>
    </div>
  `;
  chatContainer.appendChild(div);
  scrollChatToBottom();
}

// SHOW TYPING
function showTypingAnimation() {
  if (document.getElementById("typingIndicator")) return;
  const div = document.createElement("div");
  div.id = "typingIndicator";
  div.style.cssText = "display:flex;gap:8px;align-items:flex-start;margin-bottom:4px;";
  div.innerHTML = `
    <div style="width:32px;height:32px;border-radius:50%;background:#e0f2fe;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <i class="fa-solid fa-robot" style="color:#0ea5e9;font-size:13px;"></i>
    </div>
    <div style="background:#e0f2fe;padding:10px 16px;border-radius:4px 16px 16px 16px;display:flex;gap:5px;align-items:center;">
      <span style="width:7px;height:7px;border-radius:50%;background:#0ea5e9;display:inline-block;animation:bounce 1s infinite;"></span>
      <span style="width:7px;height:7px;border-radius:50%;background:#0ea5e9;display:inline-block;animation:bounce 1s infinite 0.2s;"></span>
      <span style="width:7px;height:7px;border-radius:50%;background:#0ea5e9;display:inline-block;animation:bounce 1s infinite 0.4s;"></span>
    </div>
  `;
  chatContainer.appendChild(div);
  scrollChatToBottom();
}

// Add bounce animation
const style = document.createElement("style");
style.textContent = `@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }`;
document.head.appendChild(style);

// REMOVE TYPING
function removeTypingAnimation() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
}

// ASK AI
async function askAI() {
  showTypingAnimation();
  sendBtn.disabled = true;

  try {
    const response = await fetch(
      "https://english-janala-ai.redwanhasan-dev.workers.dev/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "google/gemma-2-9b-it",
          temperature: 0.4,
          top_p: 0.9,
          max_tokens: 250,
          messages: conversationHistory
        })
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const data = await response.json();
    removeTypingAnimation();

    if (data.error) {
      addAIMessage("⚠️ AI error: " + data.error.message);
      return;
    }

    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand.";

    conversationHistory.push({ role: "assistant", content: reply });
    saveConversation();

    if (conversationHistory.length > 20) {
      conversationHistory.splice(1, 2);
    }

    const formattedReply = marked.parse(reply);
    addAIMessage(formattedReply);

  } catch (error) {
    removeTypingAnimation();
    addAIMessage("⚠️ AI server error. Please try again.");
    console.error(error);
  } finally {
    sendBtn.disabled = false;
  }
}

// HANDLE USER MESSAGE
function handleUserMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  addUserMessage(message);
  conversationHistory.push({ role: "user", content: message });
  saveConversation();
  chatInput.value = "";
  askAI();
}

// EVENTS
sendBtn.addEventListener("click", handleUserMessage);
chatInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") handleUserMessage();
});

// TOGGLE CHAT
function toggleChat() {
  const panel = document.getElementById("ai-chat-panel");
  const chatIcon = document.getElementById("chat-icon");
  const closeIcon = document.getElementById("close-icon");
  const isOpen = panel.style.display === "flex";

  if (isOpen) {
    panel.style.display = "none";
    chatIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    panel.style.display = "flex";
    chatIcon.style.display = "none";
    closeIcon.style.display = "block";
    chatInput.focus();
    scrollChatToBottom();
  }
}

// Hover effect
const chatBtn = document.getElementById("ai-chat-btn");
chatBtn.addEventListener("mouseenter", () => {
  chatBtn.style.transform = "scale(1.1)";
  chatBtn.style.boxShadow = "0 6px 28px rgba(14,165,233,0.65)";
});
chatBtn.addEventListener("mouseleave", () => {
  chatBtn.style.transform = "scale(1)";
  chatBtn.style.boxShadow = "0 4px 20px rgba(14,165,233,0.5)";
});

// RESTORE CHAT ON PAGE LOAD
window.addEventListener("load", function() {
  if (conversationHistory.length <= 1) {
    addAIMessage(`
      <p style="font-weight:700;font-size:15px;margin:0 0 6px 0;">Hello! 👋</p>
      <p style="margin:0 0 8px 0;">Welcome to <strong>English Janala</strong>. I'm Rahman, and I'm here to help you improve your English.</p>
      <p style="margin:0 0 4px 0;">You can ask me about:</p>
      <ul style="margin:4px 0 8px 16px;padding:0;">
        <li>Word meanings &amp; pronunciation</li>
        <li>Example sentences</li>
        <li>Basic grammar</li>
        <li>Conversation practice</li>
      </ul>
      <p style="margin:0;color:#0369a1;font-style:italic;">What would you like to learn today?</p>
    `);
  } else {
    conversationHistory.forEach(msg => {
      if (msg.role === "user") addUserMessage(msg.content);
      if (msg.role === "assistant") addAIMessage(marked.parse(msg.content));
    });
  }
});
