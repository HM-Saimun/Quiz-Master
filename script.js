
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
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const questionTypeSelect = document.getElementById('question-type');
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
const totalQuestionsElement = document.querySelector('.total-questions');
const timeRemainingElement = document.querySelector('.time-remaining');
const restartButton = document.querySelector('.restart-btn');
const newQuizButton = document.querySelector('.new-quiz-btn');
const feedbackForm = document.querySelector('.feedback-form');
const ratingStars = document.querySelectorAll('.rating i');
const feedbackTextarea = document.querySelector('.feedback-form textarea');
const submitFeedbackButton = document.querySelector('.submit-feedback');
const scoresList = document.querySelector('.scores-list');
const logoutButton = document.querySelector('.logout-btn');

// Get current user
const currentUser = JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser'));

// Quiz state
let currentQuiz = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: null,
    timeLeft: 60,
    category: '',
    difficulty: '',
    questionType: '',
    answeredCorrectly: 0
};

// High scores
let highScores = JSON.parse(localStorage.getItem('quizHighScores')) || [];

// Initialize the app
function init() {
    displayHighScores();
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', nextQuestion);
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

// Display high scores
function displayHighScores() {
    scoresList.innerHTML = '';
    
    if (highScores.length === 0) {
        scoresList.innerHTML = '<p>No scores yet</p>';
        return;
    }
    
    // Sort by score (descending)
    highScores.sort((a, b) => b.score - a.score);
    
    // Display top 5
    highScores.slice(0, 5).forEach(score => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
        scoreItem.innerHTML = `
            <span>${score.category} (${score.difficulty})</span>
            <span>${score.score}/${score.total}</span>
        `;
        scoresList.appendChild(scoreItem);
    });
}

// Start the quiz
function startQuiz() {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    const questionType = questionTypeSelect.value;
    
    // Get 20 random questions
    let questions = getRandomQuestions(category, difficulty, 20);
    
    // If a specific question type is selected, filter those
    if (questionType !== 'all') {
        questions = questions.filter(q => q.type === questionType);
        
        // If we don't have enough questions after filtering, show warning
        if (questions.length < 10) {
            alert(`Only ${questions.length} ${questionType} questions available. Showing all types.`);
            questions = getRandomQuestions(category, difficulty, 20);
        }
    }
    
    // Set up quiz state
    currentQuiz = {
        questions,
        currentQuestionIndex: 0,
        score: 0,
        timer: null,
        timeLeft: 60 * 5, // 2 minutes for 20 questions
        category,
        difficulty,
        questionType,
        answeredCorrectly: 0
    };
    
    // Update UI
    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    
    // Set category and difficulty badges
    const categoryIcon = categoryIcons[category];
    categoryBadge.innerHTML = `<i class="fas ${categoryIcon}"></i> ${capitalizeFirstLetter(category)}`;
    difficultyBadge.textContent = capitalizeFirstLetter(difficulty);
    
    // Set difficulty badge color
    difficultyBadge.className = 'difficulty-badge';
    if (difficulty === 'easy') {
        difficultyBadge.classList.add('easy');
    } else if (difficulty === 'medium') {
        difficultyBadge.classList.add('medium');
    } else {
        difficultyBadge.classList.add('hard');
    }
    
    // Start timer and show first question
    startTimer();
    showQuestion();
}

// Show current question
function showQuestion() {
    resetState();
    
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const questionNumber = currentQuiz.currentQuestionIndex + 1;
    const totalQuestions = currentQuiz.questions.length;
    
    // Update progress
    progressElement.textContent = `Question ${questionNumber} of ${totalQuestions}`;
    scoreElement.textContent = `Score: ${currentQuiz.score}`;
    
    // Display question
    questionElement.textContent = currentQuestion.question;
    
    // Handle different question types
    if (currentQuestion.type === 'multiple' || currentQuestion.type === 'boolean') {
        optionsContainer.classList.remove('hidden');
        fillContainer.classList.add('hidden');
        optionsContainer.classList.remove('boolean-options');
        
        if (currentQuestion.type === 'boolean') {
            optionsContainer.classList.add('boolean-options');
        }
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            optionsContainer.appendChild(button);
            
            button.addEventListener('click', () => selectAnswer(option));
        });
    }
    else if (currentQuestion.type === 'multiple') {
        optionsContainer.classList.remove('hidden');
        fillContainer.classList.add('hidden');
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            optionsContainer.appendChild(button);
            
            button.addEventListener('click', () => selectAnswer(option));
        });
    } 
    else if (currentQuestion.type === 'boolean') {
        optionsContainer.classList.remove('hidden');
        fillContainer.classList.add('hidden');
        optionsContainer.classList.add('boolean-options');
        
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
}

// Handle answer selection for MC/Boolean questions
function selectAnswer(selectedOption) {
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
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
        currentQuiz.score += 10 * getDifficultyMultiplier();
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
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const userAnswer = fillInput.value.trim().toLowerCase();
    const correctAnswer = currentQuestion.answer.toLowerCase();
    
    if (userAnswer === '') return;
    
    fillInput.disabled = true;
    submitFillButton.disabled = true;
    
    if (userAnswer === correctAnswer) {
        fillContainer.classList.add('correct');
        currentQuiz.score += 10 * getDifficultyMultiplier();
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

// Timer functionality
function startTimer() {
    clearInterval(currentQuiz.timer);
    currentQuiz.timeLeft = 60 * 5;
    timerElement.textContent = `Time: ${currentQuiz.timeLeft}`;
    
    currentQuiz.timer = setInterval(() => {
        currentQuiz.timeLeft--;
        timerElement.textContent = `Time: ${currentQuiz.timeLeft}`;
        
        if (currentQuiz.timeLeft <= 0) {
            clearInterval(currentQuiz.timer);
            endQuiz();
        }
    }, 5000);
}

// Move to next question or end quiz
function nextQuestion() {
    currentQuiz.currentQuestionIndex++;
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Add logout functionality (you can add a logout button in your quiz UI)
function logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Add event listener
logoutButton.addEventListener('click', logout);

// End quiz and show results
function endQuiz() {
    clearInterval(currentQuiz.timer);
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Update results
    finalScoreElement.textContent = currentQuiz.score;
    correctAnswersElement.textContent = currentQuiz.answeredCorrectly;
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    timeRemainingElement.textContent = currentQuiz.timeLeft;
    
    // Update category and difficulty badges in results
    const categoryIcon = categoryIcons[currentQuiz.category];
    document.querySelector('.results-container .category-badge i').className = `fas ${categoryIcon}`;
    document.querySelector('.results-container .category-badge span').textContent = capitalizeFirstLetter(currentQuiz.category);
    
    const difficultyBadge = document.querySelector('.results-container .difficulty-badge');
    difficultyBadge.innerHTML = `<span>${capitalizeFirstLetter(currentQuiz.difficulty)}</span>`;
    difficultyBadge.className = 'badge difficulty-badge';
    difficultyBadge.classList.add(currentQuiz.difficulty);

    // Update user stats
    if (currentUser) {
        currentUser.stats.quizzesTaken++;
        if (currentQuiz.score > currentUser.stats.highScore) {
            currentUser.stats.highScore = currentQuiz.score;
        }
        
        // Update in storage
        if (localStorage.getItem('currentUser')) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        // Update in users array
        const users = JSON.parse(localStorage.getItem('quizAppUsers')) || [];
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('quizAppUsers', JSON.stringify(users));
        }
    }
    
    // Save high score
    saveHighScore();

    const resultsLogoutBtn = document.querySelector('.results-container .logout-btn');
    if (resultsLogoutBtn) {
        resultsLogoutBtn.classList.remove('hidden');
    }
}

// Save high score to local storage
function saveHighScore() {
    const highScore = {
        category: currentQuiz.category,
        difficulty: currentQuiz.difficulty,
        score: currentQuiz.score,
        total: currentQuiz.questions.length,
        date: new Date().toISOString()
    };
    
    highScores.push(highScore);
    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
    displayHighScores();
}

// Restart the same quiz
function restartQuiz() {
    feedbackForm.classList.add('hidden');
    startQuiz();
}

// Start a new quiz with different settings
function newQuiz() {
    feedbackForm.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');
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

// Add some sample high scores if none exist (for demo purposes)
if (highScores.length === 0) {
    highScores = [
        { category: 'science', difficulty: 'hard', score: 180, total: 10, date: '2023-06-15' },
        { category: 'history', difficulty: 'medium', score: 135, total: 10, date: '2023-06-14' },
        { category: 'geography', difficulty: 'easy', score: 90, total: 10, date: '2023-06-13' },
        { category: 'general', difficulty: 'medium', score: 120, total: 10, date: '2023-06-12' },
        { category: 'science', difficulty: 'easy', score: 80, total: 10, date: '2023-06-11' }
    ];
    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
    displayHighScores();
}