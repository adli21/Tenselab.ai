// ==========================================
// TenseLabAI - COMPLETE FRONTEND ENGINE (Option A - Hugging Face)
// ==========================================

// 1. CRIME SCENARIO DATABASE (20 Advanced Detective Cases)
const crimeDatabase = [
    {
        title: "The Midnight Vault Timeline",
        story: "During interrogation, the bank manager insisted, 'When I entered the vault at midnight, the hacker deleted the transaction logs.' However, forensic recovery proved every file had already disappeared twenty minutes before the manager even reached the vault. The detective concludes that the manager's wording creates an impossible sequence of events.",
        question: "Which sentence accurately reflects the timeline?",
        options: [
            "The hacker had deleted the transaction logs.",
            "The hacker deleted the transaction logs.",
            "The hacker was deleting the transaction logs.",
            "The hacker has deleted the transaction logs."
        ],
        correctIndex: 0,
        tenseTested: "Past Perfect"
    },
    {
        title: "The Embassy Stakeout",
        story: "At exactly 10:15 PM, agents surrounded the embassy. Through the windows, they saw the suspect frantically copying classified files onto a flash drive. The copying was still happening when officers entered.",
        question: "Which tense correctly describes the action in progress?",
        options: [
           "The suspect was copying the files.",
            "The suspect copied the files.",
            "The suspect had copied the files.",
            "The suspect has copied the files."
        ],
        correctIndex: 0,
        tenseTested: "Past Continuous"
    },
    {
        title: "The Counterfeit Empire",
        story: "Interpol reports that the crime syndicate began producing fake passports in 2018 and continues operating today. Detectives want to emphasize that the illegal business started in the past and still exists.",
        question: "Which sentence is correct?",
        options: [
            "The syndicate has produced fake passports since 2018.",
            "The syndicate produced fake passports since 2018.",
            "The syndicate had produced fake passports since 2018.",
            "The syndicate produces fake passports since 2018."
        ],
        correctIndex: 0,
        tenseTested: "Present Perfect"
    },
    {
        title: "The Endless Cyberattack",
        story: "Government servers first came under attack eleven hours ago, and cybersecurity experts are still fighting the intrusion.",
        question: "Which tense best emphasizes the duration and that the attack is still continuing?",
        options: [
            "The hackers have been attacking the servers for eleven hours.",
            "The hackers have attacked the servers for eleven hours.",
            "The hackers attacked the servers for eleven hours.",
            "The hackers had attacked the servers for eleven hours."
        ],
        correctIndex: 0,
        tenseTested: "Present Perfect Continuous"
    },
    {
        title: "The Jewel Auction",
        story: "Every Thursday, the smuggler secretly meets buyers at the same abandoned warehouse before transporting stolen gems overseas.",
        question: "Which tense best describes this repeated routine?",
        options: [
             "The smuggler meets buyers every Thursday.",
            "The smuggler is meeting buyers every Thursday.",
            "The smuggler has met buyers every Thursday.",
            "The smuggler met buyers every Thursday."
        ],
        correctIndex: 0,
        tenseTested: "Present Simple"
    },
    {
        title: "The Airport Escape",
        story: "Yesterday afternoon, customs officers finally caught the fugitive after a two-hour chase through the airport.",
        question: "Which sentence correctly reports the completed event?",
        options: [
            "Officers catch the fugitive.",
            "Officers caught the fugitive.",
            "Officers have caught the fugitive.",
            "Officers are catching the fugitive."
        ],
        correctIndex: 1,
        tenseTested: "Past Simple"
    },
    {
        title: "The Marathon Investigation",
        story: "When detectives finally located the witness, they were exhausted because they had spent the previous nine hours searching every district of the city.",
        question: "Which tense best emphasizes the duration before another past event?",
        options: [
            "They searched for nine hours.",
            "They had been searching for nine hours.",
            "They had searched for nine hours.",
            "They were searching for nine hours."
        ],
        correctIndex: 1,
        tenseTested: "Past Perfect Continuous"
    },
    {
        title: "The Border Crossing",
        story: "By the time border patrol closes every checkpoint tomorrow evening, the fugitive is expected to be safely across the frontier.",
        question: "Which tense correctly expresses completion before a future point?",
        options: [
            "The fugitive will cross.",
            "The fugitive will have crossed.",
            "The fugitive will be crossing.",
            "The fugitive crosses."
        ],
        correctIndex: 1,
        tenseTested: "Future Perfect"
    },
    {
        title: "The Hidden Microphone",
        story: "At exactly 8:00 PM tomorrow, undercover officers will remain inside the conference room collecting evidence while the meeting continues.",
        question: "Which tense expresses an action that will be in progress at a future time?",
        options: [
            "The officers will record the meeting.",
            "The officers will be recording the meeting.",
            "The officers will have recorded the meeting.",
            "The officers record the meeting."
        ],
        correctIndex: 1,
        tenseTested: "Future Continuous"
    },
    {
        title: "The Judge's Prediction",
        story: "The detective confidently says, 'Tomorrow, the jury ________ the defendant guilty.' This is a prediction about a future event.",
        question: "Which tense is used for this future prediction?",
        options: [
            "finds",
            "will find",
            "found",
            "has found"
        ],
        correctIndex: 1,
        tenseTested: "Future Simple"
    },
    {
        title: "The Secret Tunnel",
        story: "By next Monday, prison officials ______________ the escape tunnel for exactly two weeks.",
        question: "Which tense emphasizes duration up to a future moment?",
        options: [
            "will inspect",
            "will have inspected",
            "will have been inspecting",
            "inspect"
        ],
        correctIndex: 2,
        tenseTested: "Future Perfect Continuous"
    },
    {
        title: "The Missing Painting",
        story: "Right now, detectives can clearly see the thief __________ the priceless painting from the museum wall through the security cameras.",
        question: "Which tense best fits?",
        options: [
            "removes",
            "removed",
            "is removing",
            "has removed"
        ],
        correctIndex: 2,
        tenseTested: "Present Continuous"
    },
    {
        title: "The False Alibi",
        story: "A suspect claimed, 'When the police knocked, I finished burning the documents.' Laboratory analysis proved the ashes were already cold long before the officers arrived.",
        question: "Which revision makes the statement logically correct?",
        options: [
            "I finished burning the documents.",
            "I was finishing the documents.",
            "I had finished burning the documents.",
            "I have finished burning the documents."
        ],
        correctIndex: 2,
        tenseTested: "Past Perfect"
    },
    {
        title: "The Smuggler's Routine",
        story: "Investigators discover the captain secretly transported illegal cargo every full moon, maintaining a consistent schedule.",
        question: "Which tense correctly describes this habitual activity?",
        options: [
            "is transporting",
            "transported",
            "transports",
            "has transported"
        ],
        correctIndex: 2,
        tenseTested: "Present Simple"
    },
    {
        title: "The Power Failure",
        story: "When the lights suddenly went out, the forensic scientist _________ the DNA samples under the microscope.",
        question: "Which tense best describes the interrupted action?",
        options: [
            "examined",
            "had examined",
            "was examining",
            "has examined"
        ],
        correctIndex: 2,
        tenseTested: "Past Continuous"
    },
    {
        title: "The Secret Files",
        story: "The intelligence officer first began decoding the encrypted files three days ago and continues working without rest.",
        question: "Which tense best emphasizes the ongoing effort?",
        options: [
            "has decoded",
            "decoded",
            "had decoded",
            "has been decoding"
        ],
        correctIndex: 3,
        tenseTested: "Present Perfect Continuous"
    },
    {
        title: "The Escape Plan",
        story: "By sunrise tomorrow, engineers must disable every prison camera before the prisoner executes his escape.",
        question: "Which tense expresses that the work will already be complete?",
        options: [
            "disable",
            "will disable",
            "will be disabling",
            "will have disabled"
        ],
        correctIndex: 3,
        tenseTested: "Future Perfect"
    },
    {
        title: "The Final Chase",
        story: "At this exact time tomorrow, helicopters __________ above the mountains searching for the escaped prisoner.",
        question: "Which tense is correct?",
        options: [
            "will fly",
            "will have flown",
            "fly",
            "will be flying",
        ],
        correctIndex: 3,
        tenseTested: "Future Continuous"
    },
    {
        title: "The Witness Report",
        story: "Yesterday evening, a tourist unexpectedly ___________ the hidden weapon behind the old fireplace in the abandoned mansion.",
        question: "Which tense correctly reports the completed discovery?",
        options: [
            "discovers",
            "has discovered",
            "is discovering",
            "discovered"
        ],
        correctIndex: 3,
        tenseTested: "Past Simple"
    },
    {
        title: "The International Investigation",
        story: "The detective predicts that by next December, international investigators __________ organized crime across five different countries for nearly four consecutive years.",
        question: "Which tense best expresses both duration and completion up to a future point?",
        options: [
            "will investigate",
            "will have investigated",
            "investigate",
            "will have been investigating"
        ],
        correctIndex: 3,
        tenseTested: "Future Perfect Continuous"
    }
];

// STATE ENGINE VARIABLES
let currentStoryIndex = 0;
let casesSolved = 0;
let totalAttempts = 0;
let currentRoundHistory = []; // Tracks only current round (max 20)
let randomizedCases = [];
let gameStarted = false; // Track if game is running

// FEEDBACK SYSTEM VARIABLES
let feedbackList = JSON.parse(localStorage.getItem('tenseLabFeedback')) || [];
let currentFeedbackPage = 1;
const FEEDBACK_PER_PAGE = 20;
const DEVELOPER_PASSWORD = "sherlock2026";

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

// UTILITY: SHUFFLE ARRAY FUNCTION
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// UTILITY: CREATE RANDOMIZED CASES WITH SHUFFLED OPTIONS
function createRandomizedCaseSet() {
    return crimeDatabase.map(caseItem => {
        // Shuffle the options
        const shuffledOptions = shuffleArray(caseItem.options);
        
        // Find the new index of the correct answer
        const correctAnswer = caseItem.options[caseItem.correctIndex];
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        return {
            ...caseItem,
            options: shuffledOptions,
            correctIndex: newCorrectIndex,
            originalCorrectIndex: caseItem.correctIndex,
            originalOptions: caseItem.options
        };
    });
}

// INVESTIGATION ENGINE (Loads the current case file details with randomized options)
function loadCurrentCase() {
    const container = document.getElementById('story-content');
    
    if (!container) return;

    // If game hasn't started, show START button
    if (!gameStarted) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h2 style="color: var(--accent); margin-bottom: 1rem;">🕵️‍♂️ Ready for Investigation?</h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">Test your grammar detective skills on 20 crime cases.</p>
                <button onclick="startGame()" style="
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                ">🚀 START INVESTIGATION</button>
            </div>
        `;
        return;
    }

    // Game is running - show current case
    const currentCase = randomizedCases[currentStoryIndex];
    
    if (!currentCase) return;

    let optionsHTML = '';
    currentCase.options.forEach((option, idx) => {
        optionsHTML += `<button class="option-btn" onclick="submitInvestigatorAnswer(${idx})">${option}</button>`;
    });

    container.innerHTML = `
        <h2 style="color: var(--accent);">${currentCase.title} (Case ${currentStoryIndex + 1} of ${randomizedCases.length})</h2>
        <p class="story-text">"${currentCase.story}"</p>
        <div class="question-box">
            <p><strong>Clue Checklist:</strong> ${currentCase.question}</p>
            <div class="options-grid">${optionsHTML}</div>
        </div>
    `;
}

// START GAME FUNCTION
function startGame() {
    // Reset all game stats
    currentStoryIndex = 0;
    casesSolved = 0;
    totalAttempts = 0;
    currentRoundHistory = [];
    gameStarted = true;
    
    // Randomize only the case order (questions random)
    // Keep options and correctIndex unchanged
    randomizedCases = shuffleArray(crimeDatabase);
    
    // Reset dashboard
    updateMetricsDashboard();
    
    // Load first case
    loadCurrentCase();
}

// ANSWER HANDLER & SCORE LOGIC
function submitInvestigatorAnswer(selectedIndex) {
    console.log('Answer submitted:', { selectedIndex, currentStoryIndex });
    
    const activeCase = randomizedCases[currentStoryIndex];
    totalAttempts++;
    
    console.log('Active Case:', activeCase);
    console.log('Selected Index:', selectedIndex, 'Correct Index:', activeCase.correctIndex);
    console.log('Selected Answer:', activeCase.options[selectedIndex]);
    console.log('Correct Answer:', activeCase.options[activeCase.correctIndex]);
    
    let isCorrect = selectedIndex === activeCase.correctIndex;
    console.log('Is Correct:', isCorrect);
    let statusBadge = "";

    if (isCorrect) {
        casesSolved++;
        statusBadge = `<span class="badge-success">CASE SOLVED</span>`;
        console.log('✓ Correct answer! Cases solved now:', casesSolved);
        alert("Excellent Deduction, Detective! That aligns perfectly with the timeline evidence.");
    } else {
        statusBadge = `<span class="badge-fail">UNRESOLVED</span>`;
        console.log('✗ Wrong answer. Cases solved still:', casesSolved);
        alert("Incorrect. That choice creates a temporal paradox or alters the timeline contradiction.");
    }

    currentRoundHistory.unshift({
        caseTitle: activeCase.title,
        tenseUsed: activeCase.tenseTested,
        result: statusBadge,
        correctAnswer: activeCase.options[activeCase.correctIndex],
        allOptions: activeCase.options,
        correctIndex: activeCase.correctIndex,
        selectedAnswer: activeCase.options[selectedIndex],
        isCorrect: isCorrect,
        story: activeCase.story,
        question: activeCase.question
    });

    updateMetricsDashboard();
    
    currentStoryIndex = (currentStoryIndex + 1) % randomizedCases.length;
    
    // Check if 20 questions completed - show FINISH button
    if (currentStoryIndex === 0) {
        showFinishButton();
    } else {
        loadCurrentCase();
    }
}

// SHOW FINISH BUTTON (After 20 questions completed)
function showFinishButton() {
    const container = document.getElementById('story-content');
    if (!container) return;
    
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h2 style="color: var(--accent); margin-bottom: 1rem;">🎉 Bravo, Detective!</h2>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">With every tense correctly identified, you've proven yourself worthy of the title:</p>
            <p style="color: var(--primary); font-size: 1.3rem; font-weight: bold; margin-bottom: 2rem;">The Modern Sherlock of Grammar</p>
            <button onclick="finishGame()" style="
                padding: 1rem 2rem;
                font-size: 1.1rem;
                background: var(--accent);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
            ">✓ FINISH</button>
        </div>
    `;
}

// FINISH GAME AND SHOW RESULTS
function finishGame() {
    // Update dashboard with current round results
    updateMetricsDashboard();
    
    // Show message telling user to check dashboard
    const container = document.getElementById('story-content');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h2 style="color: var(--accent); margin-bottom: 1rem;">✅ Investigation Complete!</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Your results have been recorded.</p>
                <p style="color: var(--primary); font-size: 1.1rem; font-weight: bold; margin-bottom: 2rem;">👈 Click <strong>📊 The Case Ledger</strong> on the left to view your score!</p>
                <button onclick="resetToStart()" style="
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                ">↻ Back to Start</button>
            </div>
        `;
    }
}

// RESET TO START SCREEN
function resetToStart() {
    gameStarted = false;
    currentStoryIndex = 0;
    casesSolved = 0;
    totalAttempts = 0;
    currentRoundHistory = [];
    randomizedCases = [];
    
    loadCurrentCase();
}

// DASHBOARD SYNCHRONIZATION 
function updateMetricsDashboard() {
    console.log('UPDATE DASHBOARD - memory casesSolved:', casesSolved, 'totalAttempts:', totalAttempts);
    
    const solvedEl = document.getElementById('stat-solved');
    const totalEl = document.getElementById('stat-total');
    const accuracyEl = document.getElementById('stat-accuracy');
    const logContainer = document.getElementById('history-log');

    console.log('Dashboard updating:', { casesSolved, totalAttempts, solvedEl, totalEl, accuracyEl });
    
    if (solvedEl) {
        solvedEl.innerText = casesSolved;
        console.log('Updated stat-solved to:', casesSolved);
    }
    if (totalEl) {
        totalEl.innerText = totalAttempts;
        console.log('Updated stat-total to:', totalAttempts);
    }
    
    let accuracy = totalAttempts > 0 ? Math.round((casesSolved / totalAttempts) * 100) : 0;
    if (accuracyEl) {
        accuracyEl.innerText = accuracy + "%";
        console.log('Updated stat-accuracy to:', accuracy + "%");
    }

    if (logContainer) {
        logContainer.innerHTML = "";
        
        // Show message if no game has been played
        if (currentRoundHistory.length === 0) {
            logContainer.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 2rem;">Click "START INVESTIGATION" to begin playing!</div>';
            return;
        }
        
        // Show current round history (max 20 items)
        currentRoundHistory.forEach((item, index) => {
            logContainer.innerHTML += `
                <li class="history-item" onclick="viewCaseDetails(${index})" style="cursor: pointer;">
                    <span><strong>${item.caseTitle}</strong> (Focus: ${item.tenseUsed})</span>
                    ${item.result}
                </li>
            `;
        });
    }
}

// CASE DETAILS VIEWER (Modal to show correct answer)
function viewCaseDetails(caseIndex) {
    const caseItem = currentRoundHistory[caseIndex];
    if (!caseItem) return;

    const modalHTML = `
        <div id="case-modal-overlay" onclick="closeCaseModal()"></div>
        <div id="case-modal" class="case-details-modal">
            <div class="modal-header">
                <h2>${caseItem.caseTitle}</h2>
                <button onclick="closeCaseModal()" class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>Case Story:</h3>
                    <p class="case-story">"${caseItem.story}"</p>
                </div>

                <div class="modal-section">
                    <h3>Clue Checklist:</h3>
                    <p class="case-question">${caseItem.question}</p>
                </div>

                <div class="modal-section">
                    <h3>Tense Tested:</h3>
                    <p class="tense-badge">${caseItem.tenseUsed}</p>
                </div>

                <div class="modal-section">
                    <h3>Your Answer:</h3>
                    <div class="answer-box ${caseItem.isCorrect ? 'correct' : 'incorrect'}">
                        <p><strong>${caseItem.selectedAnswer}</strong></p>
                        <span class="answer-status">${caseItem.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>Correct Answer:</h3>
                    <div class="answer-box correct-highlight">
                        <p><strong>${caseItem.correctAnswer}</strong></p>
                    </div>
                </div>

                <div class="modal-section">
                    <h3>All Options:</h3>
                    <div class="options-review">
                        ${caseItem.allOptions.map((option, idx) => `
                            <div class="option-review ${idx === caseItem.correctIndex ? 'is-correct' : ''}">
                                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                                <span class="option-text">${option}</span>
                                ${idx === caseItem.correctIndex ? '<span class="correct-marker">✓ CORRECT</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button onclick="closeCaseModal()" class="modal-btn">Close</button>
            </div>
        </div>
    `;

    // Remove existing modal if present
    const existingOverlay = document.getElementById('case-modal-overlay');
    if (existingOverlay) existingOverlay.remove();
    const existingModal = document.getElementById('case-modal');
    if (existingModal) existingModal.remove();

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeCaseModal() {
    const modal = document.getElementById('case-modal');
    const overlay = document.getElementById('case-modal-overlay');
    if (modal) modal.remove();
    if (overlay) overlay.remove();
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseModal();
});

// 2. LIVE BROWSER CHATBOT ENGINE (Direct API - LOCAL TESTING ONLY!)
// ⚠️ WARNING: This version has API key in frontend code
// ONLY for local testing/learning - DO NOT upload to GitHub!

async function sendChatMessage() {
    const inputElement = document.getElementById('chat-input');
    if (!inputElement) return;

    const messageText = inputElement.value.trim();
    if (!messageText) return;

    const chatMessagesContainer = document.getElementById('chat-messages');
    if (!chatMessagesContainer) return;

    // Display user message
    chatMessagesContainer.innerHTML += `<div class="message user">${messageText}</div>`;
    inputElement.value = "";
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Show loading indicator
    const typingId = "bot-typing-" + Date.now();
    chatMessagesContainer.innerHTML += `<div class="message bot" id="${typingId}">🔍 Analyzing...</div>`;
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    try {
        // YOUR API KEY - PASTE HERE FOR LOCAL TESTING
        const GROQ_API_KEY = "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";

        // Call Groq API directly
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: [
                    {
                        role: 'system',
                        content: 'You are TenseLab, an AI Grammar Detective. Help students understand English verb tenses clearly in 1-2 sentences.'
                    },
                    {
                        role: 'user',
                        content: messageText
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });

        const data = await response.json();
        let botResponse = "";

        // Parse response
        if (data.choices && data.choices[0]?.message?.content) {
            botResponse = data.choices[0].message.content.trim();
        } else if (data.error) {
            botResponse = `⚠️ Error: ${data.error.message || 'Unknown error'}`;
        } else {
            botResponse = "I'm thinking about your question...";
        }

        // Update chat with response
        document.getElementById(typingId).innerText = botResponse;

    } catch (error) {
        console.error("Chat error:", error);
        document.getElementById(typingId).innerText = "⚠️ Connection failed: " + error.message;
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

// ==========================================
// FEEDBACK SYSTEM ENGINE
// ==========================================

function submitFeedback() {
    const nicknameInput = document.getElementById('nickname');
    const feedbackInput = document.getElementById('feedback-text');
    
    if (!nicknameInput || !feedbackInput) return;

    const nickname = nicknameInput.value.trim();
    const feedbackText = feedbackInput.value.trim();

    if (!nickname) {
        alert('Please enter your nickname!');
        nicknameInput.focus();
        return;
    }

    if (!feedbackText) {
        alert('Please enter your feedback!');
        feedbackInput.focus();
        return;
    }

    // Create feedback object
    const newFeedback = {
        id: Date.now(),
        nickname: nickname,
        text: feedbackText,
        timestamp: new Date().toLocaleString()
    };

    // Add to feedback list (newest first)
    feedbackList.unshift(newFeedback);

    // Save to localStorage
    localStorage.setItem('tenseLabFeedback', JSON.stringify(feedbackList));

    // Clear inputs
    nicknameInput.value = '';
    feedbackInput.value = '';

    // Reset to first page and reload display
    currentFeedbackPage = 1;
    loadFeedbackDisplay();

    // Show success message
    alert('Thank you! Your feedback has been submitted. 🎉');
}

function loadFeedbackDisplay() {
    const feedbackListContainer = document.getElementById('feedback-list');
    if (!feedbackListContainer) return;

    // Calculate pagination
    const totalPages = Math.ceil(feedbackList.length / FEEDBACK_PER_PAGE);
    const startIndex = (currentFeedbackPage - 1) * FEEDBACK_PER_PAGE;
    const endIndex = startIndex + FEEDBACK_PER_PAGE;
    const paginatedFeedback = feedbackList.slice(startIndex, endIndex);

    // Check if page is valid
    if (currentFeedbackPage > totalPages && totalPages > 0) {
        currentFeedbackPage = totalPages;
        loadFeedbackDisplay();
        return;
    }

    // Display feedbacks
    if (feedbackList.length === 0) {
        feedbackListContainer.innerHTML = '<div class="feedback-empty">No feedbacks yet. Be the first to share! 💬</div>';
    } else {
        feedbackListContainer.innerHTML = '';
        paginatedFeedback.forEach(fb => {
            const feedbackHTML = `
                <div class="feedback-item">
                    <div class="feedback-item-header">
                        <div class="feedback-info">
                            <span class="feedback-nickname">👤 ${escapeHtml(fb.nickname)}</span>
                            <span class="feedback-timestamp">${fb.timestamp}</span>
                        </div>
                        <button class="delete-feedback-btn" onclick="deleteFeedback(${fb.id}, '${escapeHtml(fb.nickname)}')" title="Delete this feedback">🗑️</button>
                    </div>
                    <p class="feedback-text">${escapeHtml(fb.text)}</p>
                </div>
            `;
            feedbackListContainer.innerHTML += feedbackHTML;
        });
    }

    // Update pagination info and buttons
    updatePaginationControls(totalPages);
}

function deleteFeedback(feedbackId, authorNickname) {
    // Find the feedback item
    const feedbackItem = feedbackList.find(fb => fb.id === feedbackId);
    if (!feedbackItem) return;

    // Prompt user for authentication
    let userNickname = prompt("🔐 To delete this feedback, enter your nickname or developer password:");
    
    if (userNickname === null) return; // User cancelled
    
    userNickname = userNickname.trim();
    
    // Check if user is the author or developer
    const isAuthor = userNickname === authorNickname;
    const isDeveloper = userNickname === DEVELOPER_PASSWORD;
    
    if (!isAuthor && !isDeveloper) {
        alert("❌ Access Denied! You can only delete your own feedback, or use the developer password.");
        return;
    }
    
    // Confirm deletion
    const confirmDelete = confirm(`🗑️ Are you sure you want to delete this feedback?\n\n"${feedbackItem.text.substring(0, 50)}..."`);
    
    if (!confirmDelete) return;
    
    // Delete the feedback
    feedbackList = feedbackList.filter(fb => fb.id !== feedbackId);
    localStorage.setItem('tenseLabFeedback', JSON.stringify(feedbackList));
    
    // Show success message
    alert("✓ Feedback deleted successfully!");
    
    // Refresh display
    loadFeedbackDisplay();
}

function updatePaginationControls(totalPages) {
    const pageInfo = document.getElementById('page-info');
    const prevBtn = document.querySelector('.pagination-btn');
    const nextBtn = document.querySelectorAll('.pagination-btn')[1];

    if (pageInfo) {
        if (feedbackList.length === 0) {
            pageInfo.textContent = 'No pages';
        } else {
            pageInfo.textContent = `Page ${currentFeedbackPage} of ${totalPages}`;
        }
    }

    if (prevBtn) prevBtn.disabled = currentFeedbackPage <= 1 || totalPages === 0;
    if (nextBtn) nextBtn.disabled = currentFeedbackPage >= totalPages || totalPages === 0;
}

function previousFeedbackPage() {
    if (currentFeedbackPage > 1) {
        currentFeedbackPage--;
        loadFeedbackDisplay();
        document.querySelector('.feedback-list').scrollTop = 0;
    }
}

function nextFeedbackPage() {
    const totalPages = Math.ceil(feedbackList.length / FEEDBACK_PER_PAGE);
    if (currentFeedbackPage < totalPages) {
        currentFeedbackPage++;
        loadFeedbackDisplay();
        document.querySelector('.feedback-list').scrollTop = 0;
    }
}

// Helper function to escape HTML special characters
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// BOOT ENGINE SEQUENCE ON PAGE STARTUP
window.onload = function() {
    // Show START button initially (don't start game yet)
    gameStarted = false;
    loadCurrentCase();
    updateMetricsDashboard();
    loadFeedbackDisplay();
    
    // Add Enter key support for chat input
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendChatMessage();
            }
        });
    }
};
