
// Category icons mapping
const categoryIcons = {
    general: "fa-globe",
    science: "fa-atom",
    history: "fa-landmark",
    geography: "fa-map"
};

// DOM Elements
const startScreen = document.querySelector('.start-screen');
const quizContainer = document.querySelector('.quiz-container');
const resultsContainer = document.querySelector('.results-container');
const startButton = document.querySelector('.start-btn');
const nameDialog = document.querySelector('.name-dialog');
const nameForm = document.getElementById('nameForm');
const playerNameInput = document.getElementById('playerName');
const nameError = document.querySelector('.name-error');
const cancelJoinButton = document.querySelector('.cancel-join-btn');
const joinButton = document.querySelector('.join-quiz-btn');
const difficultySelect = document.getElementById('difficulty');
const timeBudgetSelect = document.getElementById('time-budget');
const attemptedQuizCountElement = document.getElementById('attemptedQuizCount');
const startStatus = document.querySelector('.start-status');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options-container');
const fillContainer = document.querySelector('.fill-container');
const fillInput = document.querySelector('.fill-input');
const submitFillButton = document.querySelector('.submit-fill');
const nextButton = document.querySelector('.next-btn');
const timerElement = document.querySelector('.timer');
const scoreElement = document.querySelector('.score');
const progressElement = document.querySelector('.progress');
const categoryBadge = document.querySelector('.category-badge');
const difficultyBadge = document.querySelector('.difficulty-badge');
const finalScoreElement = document.querySelector('.final-score');
const correctAnswersElement = document.querySelector('.correct-answers');
const answeredQuestionsElements = document.querySelectorAll('.answered-questions');
const totalQuestionsElement = document.querySelector('.total-questions');
const timeBudgetResultElement = document.querySelector('.time-budget-result');
const timeRemainingElement = document.querySelector('.time-remaining');
const resultsHeading = document.querySelector('.results-heading');
const quitButton = document.querySelector('.quit-btn');
const restartButton = document.querySelector('.restart-btn');
const newQuizButton = document.querySelector('.new-quiz-btn');
const feedbackForm = document.querySelector('.feedback-form');
const ratingStars = document.querySelectorAll('.rating i');
const feedbackTextarea = document.querySelector('.feedback-form textarea');
const submitFeedbackButton = document.querySelector('.submit-feedback');
const scoresList = document.querySelector('.scores-list');
const sessionSaveStatus = document.querySelector('.session-save-status');

const SECONDS_PER_QUESTION = 15;

// Quiz state
let currentQuiz = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: null,
    timeLeft: 0,
    category: 'mixed',
    difficulty: '',
    questionType: 'mixed',
    timeBudgetMinutes: 5,
    deadlineAtMs: 0,
    answeredCorrectly: 0,
    answeredQuestions: 0,
    answeredCurrentQuestion: false,
    isComplete: false,
    playerName: '',
    sessionId: null,
    startedAtMs: 0
};
let attemptCountRequestId = 0;

// Initialize the app
function init() {
    displayHighScores();
    loadAttemptCount();
    startButton.addEventListener('click', openNameDialog);
    nameForm.addEventListener('submit', startQuiz);
    cancelJoinButton.addEventListener('click', closeNameDialog);
    nextButton.addEventListener('click', nextQuestion);
    quitButton.addEventListener('click', quitQuiz);
    restartButton.addEventListener('click', restartQuiz);
    newQuizButton.addEventListener('click', newQuiz);
    submitFillButton.addEventListener('click', checkFillAnswer);
    fillInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkFillAnswer();
    });
    
    // Rating stars
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            setRating(rating);
        });
    });
    
    submitFeedbackButton.addEventListener('click', submitFeedback);
}

async function openNameDialog() {
    startButton.disabled = true;
    startStatus.textContent = '';
    const requestId = ++attemptCountRequestId;
    try {
        const response = await fetch('/api/stats/start', { method: 'POST' });
        const stats = await response.json();
        if (!response.ok) {
            throw new Error(stats.error || 'Could not record this quiz attempt.');
        }
        if (requestId === attemptCountRequestId) {
            attemptedQuizCountElement.textContent = stats.attemptedQuizCount;
        }
    } catch (error) {
        console.error('Unable to count quiz attempt:', error);
        startStatus.textContent = error.message;
        return;
    } finally {
        startButton.disabled = false;
    }

    nameError.textContent = '';
    nameDialog.classList.remove('hidden');
    playerNameInput.focus();
}

async function loadAttemptCount() {
    const requestId = ++attemptCountRequestId;
    try {
        const response = await fetch('/api/stats');
        const stats = await response.json();
        if (!response.ok) {
            throw new Error(stats.error || 'Could not load quiz attempts.');
        }
        if (requestId === attemptCountRequestId) {
            attemptedQuizCountElement.textContent = stats.attemptedQuizCount;
        }
    } catch (error) {
        console.error('Unable to load quiz attempt count:', error);
        if (requestId === attemptCountRequestId) {
            attemptedQuizCountElement.textContent = 'Unavailable';
        }
    }
}

function closeNameDialog() {
    nameDialog.classList.add('hidden');
}

async function displayHighScores() {
    scoresList.textContent = 'Loading scores...';
    try {
        const response = await fetch('/api/sessions?limit=5');
        if (!response.ok) {
            throw new Error('Unable to load recent scores.');
        }
        const sessions = await response.json();
        scoresList.replaceChildren();
        if (sessions.length === 0) {
            scoresList.textContent = 'No completed quizzes yet';
            return;
        }

        sessions.forEach(session => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'score-item';
            const sessionInfo = document.createElement('span');
            sessionInfo.textContent = `${session.player_name} - ${session.difficulty} (${session.time_budget_minutes} min)`;
            const sessionScore = document.createElement('span');
            sessionScore.textContent = `${session.score}/${session.total_questions}`;
            scoreItem.append(sessionInfo, sessionScore);
            scoresList.appendChild(scoreItem);
        });
    } catch (error) {
        console.error('Unable to load recent quiz scores:', error);
        scoresList.textContent = 'Unable to load scores';
    }
}

// Start the quiz
async function startQuiz(event) {
    event.preventDefault();
    const playerName = playerNameInput.value.trim();
    if (!playerName || playerName.length > 80) {
        nameError.textContent = 'Enter a name of 1 to 80 characters.';
        playerNameInput.focus();
        return;
    }

    const difficulty = difficultySelect.value;
    const timeBudgetMinutes = Number(timeBudgetSelect.value);
    const questionCount = (timeBudgetMinutes * 60) / SECONDS_PER_QUESTION;
    nameError.textContent = '';
    joinButton.disabled = true;
    cancelJoinButton.disabled = true;
    let questions;
    try {
        const query = new URLSearchParams({ difficulty, count: String(questionCount) });
        const response = await fetch(`/api/questions?${query}`);
        if (!response.ok) {
            const result = await response.json();
            throw new Error(result.error || 'Could not load questions.');
        }
        questions = await response.json();
        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error('No questions are available for this selection.');
        }

        const sessionResponse = await fetch('/api/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerName,
                difficulty,
                questionType: 'mixed',
                totalQuestions: questions.length,
                timeBudgetMinutes
            })
        });
        const session = await sessionResponse.json();
        if (!sessionResponse.ok) {
            throw new Error(session.error || 'Could not create a quiz session.');
        }
        nameDialog.classList.add('hidden');
        beginQuiz(questions, difficulty, timeBudgetMinutes, playerName, session.sessionId);
    } catch (error) {
        console.error('Unable to start quiz:', error);
        nameError.textContent = error.message;
    } finally {
        joinButton.disabled = false;
        cancelJoinButton.disabled = false;
    }
}

function beginQuiz(questions, difficulty, timeBudgetMinutes, playerName, sessionId) {
    currentQuiz = {
        questions,
        currentQuestionIndex: 0,
        score: 0,
        timer: null,
        timeLeft: timeBudgetMinutes * 60,
        category: 'mixed',
        difficulty,
        questionType: 'mixed',
        timeBudgetMinutes,
        deadlineAtMs: Date.now() + timeBudgetMinutes * 60 * 1000,
        answeredCorrectly: 0,
        answeredQuestions: 0,
        answeredCurrentQuestion: false,
        isComplete: false,
        playerName,
        sessionId,
        startedAtMs: Date.now()
    };
    
    // Update UI
    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    
    // Set category and difficulty badges
    categoryBadge.innerHTML = '<i class="fas fa-globe"></i> All Categories';
    difficultyBadge.textContent = capitalizeFirstLetter(difficulty);
    difficultyBadge.className = 'difficulty-badge';
    difficultyBadge.classList.add(difficulty);
    
    // Start timer and show first question
    startTimer();
    showQuestion();
}

// Show current question
function showQuestion() {
    resetState();
    
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    currentQuiz.answeredCurrentQuestion = false;
    const questionNumber = currentQuiz.currentQuestionIndex + 1;
    const totalQuestions = currentQuiz.questions.length;
    
    // Update progress
    progressElement.textContent = `Question ${questionNumber} of ${totalQuestions}`;
    scoreElement.textContent = `Score: ${currentQuiz.score}`;
    const category = currentQuestion.category || currentQuiz.category;
    categoryBadge.innerHTML = `<i class="fas ${categoryIcons[category] || categoryIcons.general}"></i> ${capitalizeFirstLetter(category)}`;
    const questionDifficulty = currentQuestion.difficulty || currentQuiz.difficulty;
    difficultyBadge.textContent = capitalizeFirstLetter(questionDifficulty);
    difficultyBadge.className = 'difficulty-badge';
    difficultyBadge.classList.add(questionDifficulty);
    
    // Display question
    questionElement.textContent = currentQuestion.question;
    
    // Handle different question types
    if (currentQuestion.type === 'multiple' || currentQuestion.type === 'boolean') {
        optionsContainer.classList.remove('hidden');
        fillContainer.classList.add('hidden');
        optionsContainer.classList.toggle('boolean-options', currentQuestion.type === 'boolean');

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            optionsContainer.appendChild(button);
            
            button.addEventListener('click', () => selectAnswer(option));
        });
    } 
    else if (currentQuestion.type === 'fill') {
        optionsContainer.classList.add('hidden');
        fillContainer.classList.remove('hidden');
        fillInput.value = '';
        fillInput.focus();
    }
    
    nextButton.disabled = true;
}

// Reset question state
function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    optionsContainer.classList.remove('boolean-options');
    fillContainer.classList.remove('correct', 'incorrect');
    fillInput.disabled = false;
    submitFillButton.disabled = false;
    const correctAnswer = fillContainer.querySelector('p');
    if (correctAnswer) {
        fillContainer.removeChild(correctAnswer);
    }
}

// Handle answer selection for MC/Boolean questions
function selectAnswer(selectedOption) {
    if (currentQuiz.isComplete || currentQuiz.answeredCurrentQuestion) return;
    if (checkTimeExpired()) return;
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    currentQuiz.answeredCurrentQuestion = true;
    currentQuiz.answeredQuestions++;
    const options = optionsContainer.querySelectorAll('.option-btn');
    const correctAnswer = currentQuestion.answer;
    
    // Disable all options
    options.forEach(option => {
        option.disabled = true;
    });
    
    // Mark correct answer
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });
    
    // Mark selected answer
    const selectedButton = Array.from(options).find(
        option => option.textContent === selectedOption
    );
    
    if (selectedOption === correctAnswer) {
        selectedButton.classList.add('correct');
        currentQuiz.score += getQuestionPoints(currentQuestion);
        currentQuiz.answeredCorrectly++;
        scoreElement.textContent = `Score: ${currentQuiz.score}`;
    } else {
        selectedButton.classList.add('incorrect');
    }
    // Show explanation if available
    if (currentQuestion.explanation) {
        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        explanation.textContent = currentQuestion.explanation;
        optionsContainer.appendChild(explanation);
    }
    
    nextButton.disabled = false;
}

// Check fill-in-the-blank answer
function checkFillAnswer() {
    if (currentQuiz.isComplete || currentQuiz.answeredCurrentQuestion) return;
    if (checkTimeExpired()) return;
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const userAnswer = fillInput.value.trim().toLowerCase();
    const correctAnswer = currentQuestion.answer.toLowerCase();
    
    if (userAnswer === '') return;
    currentQuiz.answeredCurrentQuestion = true;
    currentQuiz.answeredQuestions++;
    
    fillInput.disabled = true;
    submitFillButton.disabled = true;
    
    if (userAnswer === correctAnswer) {
        fillContainer.classList.add('correct');
        currentQuiz.score += getQuestionPoints(currentQuestion);
        currentQuiz.answeredCorrectly++;
        scoreElement.textContent = `Score: ${currentQuiz.score}`;
    } else {
        fillContainer.classList.add('incorrect');
        // Show correct answer
        const correctAnswerElement = document.createElement('p');
        correctAnswerElement.textContent = `Correct answer: ${currentQuestion.answer}`;
        correctAnswerElement.style.marginTop = '10px';
        correctAnswerElement.style.fontWeight = 'bold';
        fillContainer.appendChild(correctAnswerElement);
    }
    
    nextButton.disabled = false;
}

// Get difficulty multiplier for scoring
function getDifficultyMultiplier() {
    switch(currentQuiz.difficulty) {
        case 'easy': return 1;
        case 'medium': return 1.5;
        case 'hard': return 2;
        default: return 1;
    }
}

function getQuestionPoints(question) {
    const points = Number(question.points);
    return Number.isFinite(points) && question.points !== null && question.points !== undefined
        ? points
        : 10 * getDifficultyMultiplier();
}

// Timer functionality
function startTimer() {
    clearInterval(currentQuiz.timer);
    updateTimerDisplay();
    currentQuiz.timer = setInterval(() => {
        currentQuiz.timeLeft = getTimeRemaining();
        updateTimerDisplay();
        if (currentQuiz.timeLeft <= 0) {
            clearInterval(currentQuiz.timer);
            endQuiz('time_up');
        }
    }, 1000);
}

function getTimeRemaining() {
    return Math.max(0, Math.ceil((currentQuiz.deadlineAtMs - Date.now()) / 1000));
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentQuiz.timeLeft / 60);
    const seconds = String(currentQuiz.timeLeft % 60).padStart(2, '0');
    timerElement.textContent = `Time: ${minutes}:${seconds}`;
}

function checkTimeExpired() {
    if (!currentQuiz.isComplete && currentQuiz.deadlineAtMs && getTimeRemaining() === 0) {
        currentQuiz.timeLeft = 0;
        updateTimerDisplay();
        endQuiz('time_up');
        return true;
    }
    return false;
}

// Move to next question or end quiz
function nextQuestion() {
    if (currentQuiz.isComplete) return;
    if (checkTimeExpired()) return;
    currentQuiz.currentQuestionIndex++;
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function quitQuiz() {
    if (currentQuiz.isComplete) return;
    if (checkTimeExpired()) return;
    const confirmed = window.confirm('Quit this quiz? Your results for answered questions will be saved.');
    if (checkTimeExpired()) return;
    if (confirmed) endQuiz('quit');
}

// End quiz and show results
function endQuiz(status = 'completed') {
    if (currentQuiz.isComplete) return;
    currentQuiz.timeLeft = getTimeRemaining();
    currentQuiz.isComplete = true;
    clearInterval(currentQuiz.timer);
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Update results
    finalScoreElement.textContent = currentQuiz.score;
    correctAnswersElement.textContent = currentQuiz.answeredCorrectly;
    answeredQuestionsElements.forEach(element => {
        element.textContent = currentQuiz.answeredQuestions;
    });
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    timeRemainingElement.textContent = currentQuiz.timeLeft;
    timeBudgetResultElement.textContent = currentQuiz.timeBudgetMinutes;
    resultsHeading.textContent = status === 'quit'
        ? 'Quiz quit'
        : status === 'time_up' ? 'Time is up' : 'Quiz completed!';
    
    document.querySelector('.results-container .category-badge i').className = 'fas fa-globe';
    document.querySelector('.results-container .category-badge span').textContent = 'All Categories';
    
    const difficultyBadge = document.querySelector('.results-container .difficulty-badge');
    difficultyBadge.innerHTML = `<span>${capitalizeFirstLetter(currentQuiz.difficulty)}</span>`;
    difficultyBadge.className = 'badge difficulty-badge';
    difficultyBadge.classList.add(currentQuiz.difficulty);

    saveQuizSession(status);
}

async function saveQuizSession(status) {
    sessionSaveStatus.textContent = 'Saving your result...';
    const resultBody = getSessionResult(status);
    try {
        const response = await fetch(`/api/sessions/${currentQuiz.sessionId}/complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resultBody)
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Could not save your quiz result.');
        }
        sessionSaveStatus.textContent = 'Your result was saved.';
        displayHighScores();
    } catch (error) {
        console.error('Unable to save quiz result:', error);
        sessionSaveStatus.textContent = 'Your result could not be saved. Please tell the quiz host.';
    }
}

function getSessionResult(status) {
    return {
        score: currentQuiz.score,
        answeredQuestions: currentQuiz.answeredQuestions,
        correctAnswers: currentQuiz.answeredCorrectly,
        durationSeconds: Math.max(0, Math.round((Date.now() - currentQuiz.startedAtMs) / 1000)),
        timeRemainingSeconds: currentQuiz.isComplete
            ? currentQuiz.timeLeft
            : getTimeRemaining(),
        status
    };
}

window.addEventListener('beforeunload', () => {
    if (!currentQuiz.sessionId || currentQuiz.isComplete || !navigator.sendBeacon) return;
    const status = getTimeRemaining() === 0 ? 'time_up' : 'abandoned';
    const payload = new Blob(
        [JSON.stringify(getSessionResult(status))],
        { type: 'application/json' }
    );
    navigator.sendBeacon(`/api/sessions/${currentQuiz.sessionId}/complete`, payload);
});

// Restart the same quiz
async function restartQuiz() {
    feedbackForm.classList.add('hidden');
    restartButton.disabled = true;
    const previousQuiz = currentQuiz;
    try {
        const response = await fetch('/api/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerName: previousQuiz.playerName,
                difficulty: previousQuiz.difficulty,
                questionType: 'mixed',
                totalQuestions: previousQuiz.questions.length,
                timeBudgetMinutes: previousQuiz.timeBudgetMinutes
            })
        });
        const session = await response.json();
        if (!response.ok) {
            throw new Error(session.error || 'Could not create a new quiz session.');
        }
        beginQuiz(
            previousQuiz.questions,
            previousQuiz.difficulty,
            previousQuiz.timeBudgetMinutes,
            previousQuiz.playerName,
            session.sessionId
        );
    } catch (error) {
        console.error('Unable to restart quiz:', error);
        sessionSaveStatus.textContent = error.message;
    } finally {
        restartButton.disabled = false;
    }
}

// Start a new quiz with different settings
function newQuiz() {
    feedbackForm.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');
    playerNameInput.value = '';
    sessionSaveStatus.textContent = '';
}

// Set rating stars
function setRating(rating) {
    ratingStars.forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        if (starRating <= rating) {
            star.classList.add('active');
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('active');
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

// Submit feedback
function submitFeedback() {
    const rating = document.querySelector('.rating i.active')?.getAttribute('data-rating') || 0;
    const feedback = feedbackTextarea.value;
    
    // In a real app, you would send this to a server
    console.log('Feedback submitted:', { rating, feedback });
    
    // Reset form
    ratingStars.forEach(star => {
        star.classList.remove('active');
        star.classList.remove('fas');
        star.classList.add('far');
    });
    feedbackTextarea.value = '';
    
    // Show thank you message
    const thankYou = document.createElement('p');
    thankYou.textContent = 'Thank you for your feedback!';
    thankYou.style.color = 'var(--success-color)';
    thankYou.style.marginTop = '10px';
    thankYou.style.fontWeight = 'bold';
    
    // Remove any existing thank you message
    const existingThankYou = feedbackForm.querySelector('p');
    if (existingThankYou) {
        feedbackForm.removeChild(existingThankYou);
    }
    
    feedbackForm.appendChild(thankYou);
    
    // Hide the form after submission
    setTimeout(() => {
        feedbackForm.classList.add('hidden');
        startScreen.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
    }, 2000);
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Capitalize first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Difficulty badge color classes
function updateDifficultyBadgeColor() {
    const difficulty = currentQuiz.difficulty;
    difficultyBadge.className = 'difficulty-badge';
    
    switch(difficulty) {
        case 'easy':
            difficultyBadge.classList.add('easy');
            break;
        case 'medium':
            difficultyBadge.classList.add('medium');
            break;
        case 'hard':
            difficultyBadge.classList.add('hard');
            break;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
