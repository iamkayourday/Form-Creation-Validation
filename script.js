// DOMContentLoadedEvent
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback')

// Form Submission and Event Prevention
    form.addEventListener('submit',(event) => {
        event.preventDefault();

// Input Retrieval and trimming 
        const username = document.getElementById('username').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()

// Validation Logic
        let isValid = true;
        const messages = [];
        
// Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username too short! Must be atleast 3 characters');
        }

//Email  Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must be valid and include both "@" and "." symbols');
        }

// password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password too short! Must be atleast 8 characters');
        }
// Displaying Feedback
// Feedback Display Logic
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }

    });

});
