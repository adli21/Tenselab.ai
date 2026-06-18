// ==========================================
// TenseLabAI - COMPLETE FRONTEND ENGINE (Option A - Hugging Face)
// ==========================================

// 1. CRIME SCENARIO DATABASE (10 Unique Cases)
const crimeDatabase = [
    {
        title: "The Midnight Vault Interception",
        story: "The bank manager claims: 'I walked into the vault room at exactly midnight. The hacker was leaving.' However, security data logs prove the vault lock system had already been breached and downloaded at 11:45 PM. If the hacker finished downloading files before midnight, which tense changes the manager's testimony from a lie to an accurate chronological truth?",
        question: "Which option correctly shows the action was completed before the manager entered?",
        options: [
            "The hacker leaves.",
            "The hacker had left.",
            "The hacker was leaving.",
            "The hacker has left."
        ],
        correctIndex: 1,
        tenseTested: "Past Perfect"
    },
    {
        title: "Alibi of the Royal Chef",
        story: "During the poisoning investigation, Lord Montgomery asked the chef what he did when the bell rang. The chef answered: 'I prepared the dessert salad.' This implies he started making it *after* the bell rang. But security footage shows he was in the middle of preparing it for 20 minutes before. How should he state his alibi?",
        question: "Identify the tense required to express an action already in progress at that moment:",
        options: [
            "I have prepared the dessert salad.",
            "I was preparing the dessert salad.",
            "I had prepared the dessert salad.",
            "I prepared the dessert salad."
        ],
        correctIndex: 1,
        tenseTested: "Past Continuous"
    },
    {
        title: "The Smuggler's Warehouse Receipt",
        story: "A suspect claims: 'I own this warehouse for ten years; I know nothing about contraband.' Detective Miller spots an immediate flaw. The suspect still owns it now, and it started in the past, continuing into the present.",
        question: "Which tense correctly measures duration linking past to present?",
        options: [
            "I have owned this warehouse for ten years.",
            "I owned this warehouse for ten years.",
            "I had owned this warehouse for ten years.",
            "I am owning this warehouse for ten years."
        ],
        correctIndex: 0,
        tenseTested: "Present Perfect"
    },
    {
        title: "The Phantom Forger's Timeline",
        story: "The art dealer insists: 'By tomorrow noon, I will sell the masterpiece painting to the museum.' However, the police raid is scheduled for 9:00 AM tomorrow, and the painting is already proven to be a fake. The detective notes that the dealer expects the action to be fully completed *before* a specific deadline tomorrow.",
        question: "Which future aspect describes an action completed before a specific future time point?",
        options: [
            "I will be selling the masterpiece.",
            "I will sell the masterpiece.",
            "I will have sold the masterpiece.",
            "I am going to sell the masterpiece."
        ],
        correctIndex: 2,
        tenseTested: "Future Perfect"
    },
    {
        title: "The Ghost Train Disappearance",
        story: "A witness claims: 'When the dynamic brakes failed, the conductor jumped from the moving locomotive.' However, physics reports show the conductor was found unconscious inside the cabin *while* the train was actively speeding down the tracks. He couldn't have jumped afterward.",
        question: "Choose the statement indicating the conductor was in the middle of an action when the brakes failed:",
        options: [
            "The conductor had jumped.",
            "The conductor was jumping.",
            "The conductor jumped.",
            "The conductor has jumped."
        ],
        correctIndex: 1,
        tenseTested: "Past Continuous"
    },
    {
        title: "The Ransom Note Deadline",
        story: "The kidnapper's note reads: 'If you call the authorities, your files disappear forever.' Detective Sarah tracks the server script and notes that the file deletion is set to automatically trigger *the very split-second* a call connects. It represents a universal scientific or conditional certainty.",
        question: "Which tense handles general truths, immediate conditions, and absolute facts?",
        options: [
            "Present Simple",
            "Present Continuous",
            "Future Simple",
            "Past Simple"
        ],
        correctIndex: 0,
        tenseTested: "Present Simple"
    },
    {
        title: "The Alibi of the Sleepwalking Heiress",
        story: "The defense attorney argues: 'My client couldn't commit the burglary at 3 AM. She slept peacefully in her bed.' Detective Vance objects: 'No, sleeping is a continuous process that was actively occurring over a block of time, not a sudden event!'",
        question: "Correct the grammar to show an ongoing state during the night of the crime:",
        options: [
            "She has slept.",
            "She had slept.",
            "She was sleeping.",
            "She sleeps."
        ],
        correctIndex: 2,
        tenseTested: "Past Continuous"
    },
    {
        title: "The Cyber Heist Distraction",
        story: "The IT Director explained the breach: 'The malware crashed our network because an intern opened a phishing email.' The investigation shows the email was actually opened three days *prior*, and it sat quietly gathering data until the crash happened today.",
        question: "Which tense shows an action completed prior to another past event?",
        options: [
            "An intern opened a phishing email.",
            "An intern has opened a phishing email.",
            "An intern had opened a phishing email.",
            "An intern was opening a phishing email."
        ],
        correctIndex: 2,
        tenseTested: "Past Perfect"
    },
    {
        title: "The Spy's Border Crossing",
        story: "An undercover operative reports: 'By the time the border security forces set up the barricades next week, the asset will cross into safe territory.' The detective realizes the crossing will happen *before* the setup takes place.",
        question: "Select the correct structure to express a future action done before another future event:",
        options: [
            "The asset will have crossed.",
            "The asset will cross.",
            "The asset is crossing.",
            "The asset will be crossing."
        ],
        correctIndex: 0,
        tenseTested: "Future Perfect"
    },
    {
        title: "The Diamond Smuggler's Routine",
        story: "The suspect claims: 'I am taking the 9 AM flight to Switzerland every single Friday for business.' The customs inspector narrows his eyes. For habitual routines, repetitive actions, and permanent schedules, the suspect used the wrong grammatical structure.",
        question: "Fix the suspect's description of his weekly routine:",
        options: [
            "I take the 9 AM flight.",
            "I have taken the 9 AM flight.",
            "I was taking the 9 AM flight.",
            "I am going to take the 9 AM flight."
        ],
        correctIndex: 0,
        tenseTested: "Present Simple"
    }
];

// STATE ENGINE VARIABLES
let currentStoryIndex = 0;
let casesSolved = 0;
let totalAttempts = 0;
let caseHistory = [];

// VIEW CONTROLLER (Sidebar Navigation Tabs)
function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.nav-links li').forEach(link => link.classList.remove('active'));
    
    if (document.getElementById(viewId)) {
        document.getElementById(viewId).classList.add('active');
    }
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// INVESTIGATION ENGINE (Loads the current case file details)
function loadCurrentCase() {
    const currentCase = crimeDatabase[currentStoryIndex];
    const container = document.getElementById('story-content');
    
    if (!container) return;

    let optionsHTML = '';
    currentCase.options.forEach((option, idx) => {
        optionsHTML += `<button class="option-btn" onclick="submitInvestigatorAnswer(${idx})">${option}</button>`;
    });

    container.innerHTML = `
        <h2 style="color: var(--accent);">${currentCase.title} (Case ${currentStoryIndex + 1} of ${crimeDatabase.length})</h2>
        <p class="story-text">"${currentCase.story}"</p>
        <div class="question-box">
            <p><strong>Clue Checklist:</strong> ${currentCase.question}</p>
            <div class="options-grid">${optionsHTML}</div>
        </div>
    `;
}

// ANSWER HANDLER & SCORE LOGIC
function submitInvestigatorAnswer(selectedIndex) {
    const activeCase = crimeDatabase[currentStoryIndex];
    totalAttempts++;
    
    let isCorrect = selectedIndex === activeCase.correctIndex;
    let statusBadge = "";

    if (isCorrect) {
        casesSolved++;
        statusBadge = `<span class="badge-success">CASE SOLVED</span>`;
        alert("Excellent Deduction, Detective! That aligns perfectly with the timeline evidence.");
    } else {
        statusBadge = `<span class="badge-fail">UNRESOLVED</span>`;
        alert("Incorrect. That choice creates a temporal paradox or alters the timeline contradiction.");
    }

    caseHistory.unshift({
        caseTitle: activeCase.title,
        tenseUsed: activeCase.tenseTested,
        result: statusBadge
    });

    updateMetricsDashboard();
    
    currentStoryIndex = (currentStoryIndex + 1) % crimeDatabase.length;
    loadCurrentCase();
}

// DASHBOARD SYNCHRONIZATION 
function updateMetricsDashboard() {
    const solvedEl = document.getElementById('stat-solved');
    const totalEl = document.getElementById('stat-total');
    const accuracyEl = document.getElementById('stat-accuracy');
    const logContainer = document.getElementById('history-log');

    if (solvedEl) solvedEl.innerText = casesSolved;
    if (totalEl) totalEl.innerText = totalAttempts;
    
    let accuracy = totalAttempts > 0 ? Math.round((casesSolved / totalAttempts) * 100) : 0;
    if (accuracyEl) accuracyEl.innerText = accuracy + "%";

    if (logContainer) {
        logContainer.innerHTML = "";
        caseHistory.forEach(item => {
            logContainer.innerHTML += `
                <li class="history-item">
                    <span><strong>${item.caseTitle}</strong> (Focus: ${item.tenseUsed})</span>
                    ${item.result}
                </li>
            `;
        });
    }
}

// 2. LIVE BROWSER CHATBOT ENGINE (Groq API - Free, No Quota Limits!)
async function sendChatMessage() {
    const inputElement = document.getElementById('chat-input');
    if (!inputElement) return;

    const messageText = inputElement.value.trim();
    if (!messageText) return;

    const chatMessagesContainer = document.getElementById('chat-messages');
    if (!chatMessagesContainer) return;

    // A. Render user question instantly
    chatMessagesContainer.innerHTML += `<div class="message user">${messageText}</div>`;
    inputElement.value = "";
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // B. Temporary loading element
    const typingId = "bot-typing-" + Date.now();
    chatMessagesContainer.innerHTML += `<div class="message bot" id="${typingId}">Analyzing structural timelines...</div>`;
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // C. Get Groq API Key from localStorage or prompt user
    let GROQ_KEY = localStorage.getItem('groq_key');
    
    if (!GROQ_KEY) {
        GROQ_KEY = prompt("Enter your Groq API key (FREE, no quota limits!):\n\n1. Go to: https://console.groq.com/keys\n2. Create a new API key (free account)\n3. Copy and paste it here\n\nOr click Cancel to use offline fallback mode.");
        if (GROQ_KEY) {
            localStorage.setItem('groq_key', GROQ_KEY);
        }
    }

    // If API key available, try Groq; otherwise use fallback
    if (GROQ_KEY) {
        try {
            // D. Connect to Groq API (FREE, fast, no quotas!)
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${GROQ_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        {
                            role: "system",
                            content: "You are an AI Grammar Detective named TenseLab. Help students analyze English verb tenses. Keep responses short (1-2 sentences), clear, and educational."
                        },
                        {
                            role: "user",
                            content: messageText
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                })
            });

            const data = await response.json();
            let botResponse = "";

            // E. Parse Groq response
            if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
                botResponse = data.choices[0].message.content.trim();
            } else if (data.error) {
                botResponse = `Error: ${data.error.message}. Please check your API key.`;
            } else {
                botResponse = "I am processing the case timeline. Please ask your question again.";
            }

            // Output text onto the chatbot page view block
            document.getElementById(typingId).innerText = botResponse;

        } catch (error) {
            console.error("Groq API Error:", error);
            document.getElementById(typingId).innerText = "Connection error. Using fallback mode...";
            useOfflineFallback(messageText, typingId);
        }
    } else {
        // Use offline fallback when no key provided
        useOfflineFallback(messageText, typingId);
    }
    
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// OFFLINE FALLBACK SYSTEM (Works without API token)
function useOfflineFallback(messageText, typingId) {
    const responses = {
        "simple": "Present Simple is used for habits, routines, and universal truths. Example: 'The guard patrols every hour.'",
        "continuous": "Present Continuous shows actions happening right now. Example: 'The forensic unit is analyzing the fibers.'",
        "perfect": "Present Perfect connects past actions to the present. Example: 'The suspect has fled the scene.'",
        "past": "Past Simple marks completed actions at specific times. Example: 'The theft occurred at midnight.'",
        "future": "Future Simple shows predictions or decisions. Example: 'The team will solve this case.'",
        "tense": "All tenses work together to create accurate timelines. What specific tense would you like to learn about?",
        "help": "I can explain any English tense. Try asking about: Present Simple, Present Continuous, Present Perfect, Past Simple, Past Continuous, Past Perfect, or Future tenses."
    };

    let botResponse = "I'm in offline mode. ";
    const lowerMsg = messageText.toLowerCase();
    
    for (let [key, value] of Object.entries(responses)) {
        if (lowerMsg.includes(key)) {
            botResponse = value;
            break;
        }
    }
    
    if (botResponse === "I'm in offline mode. ") {
        botResponse += responses.help;
    }

    document.getElementById(typingId).innerText = botResponse;
}

// BOOT ENGINE SEQUENCE ON PAGE STARTUP
window.onload = function() {
    loadCurrentCase();
    updateMetricsDashboard();
};
