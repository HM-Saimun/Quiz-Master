// User accounts storage
const users = JSON.parse(localStorage.getItem('quizAppUsers')) || [];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const resetForm = document.getElementById('resetForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const forgotPassword = document.getElementById('forgotPassword');
const backToLogin = document.getElementById('backToLogin');
const loginCard = document.querySelector('.login-card');
const registerCard = document.querySelector('.register-card');
const resetCard = document.querySelector('.reset-card');
const message = document.getElementById('message');
const regMessage = document.getElementById('regMessage');
const resetMessage = document.getElementById('resetMessage');

// Switch between forms
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.classList.add('hidden');
    registerCard.classList.remove('hidden');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
});

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.classList.add('hidden');
    resetCard.classList.remove('hidden');
});

backToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    resetCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Validate user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        showMessage(message, 'Login successful! Redirecting...', 'success');
        
        // Store current user session
        if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
        
        // Redirect to quiz page after delay
        setTimeout(() => {
            window.location.href = 'quiz.html';
        }, 1500);
    } else {
        showMessage(message, 'Invalid username or password', 'error');
    }
});

// Handle registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    // Validate inputs
    if (password !== confirmPassword) {
        showMessage(regMessage, 'Passwords do not match', 'error');
        return;
    }
    
    if (users.some(u => u.username === username)) {
        showMessage(regMessage, 'Username already exists', 'error');
        return;
    }
    
    if (users.some(u => u.email === email)) {
        showMessage(regMessage, 'Email already registered', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
        stats: {
            quizzesTaken: 0,
            highScore: 0
        }
    };
    
    users.push(newUser);
    localStorage.setItem('quizAppUsers', JSON.stringify(users));
    
    showMessage(regMessage, 'Registration successful! You can now login.', 'success');
    registerForm.reset();
    
    // Auto switch to login after delay
    setTimeout(() => {
        registerCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
        message.classList.add('hidden');
    }, 2000);
});

// Handle password reset (simulated)
resetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;
    
    // Check if email exists
    if (users.some(u => u.email === email)) {
        showMessage(resetMessage, 'Password reset link sent to your email', 'success');
        resetForm.reset();
        
        // In a real app, you would send an email here
        console.log(`Password reset requested for ${email}`);
    } else {
        showMessage(resetMessage, 'Email not found in our system', 'error');
    }
});

// Show message helper function
function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `message ${type}`;
    element.classList.remove('hidden');
    
    // Hide message after 5 seconds
    setTimeout(() => {
        element.classList.add('hidden');
    }, 5000);
}

// Check for remembered user on page load
document.addEventListener('DOMContentLoaded', () => {
    const rememberedUser = localStorage.getItem('currentUser');
    const sessionUser = sessionStorage.getItem('currentUser');
    
    if (rememberedUser || sessionUser) {
        showMessage(message, 'Welcome back! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'quiz.html';
        }, 1500);
    }
});