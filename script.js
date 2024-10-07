document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');
    const authContainer = document.querySelector('.auth-container');

    loginToggle.addEventListener('click', function() {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    });

    signupToggle.addEventListener('click', function() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
        loginToggle.classList.remove('active');
        signupToggle.classList.add('active');
    });

    // Password toggle functionality
    document.querySelectorAll('.password-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '🙈';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle login logic here
        alert('Login functionality not implemented yet.');
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle signup logic here
        alert('Signup functionality not implemented yet.');
    });

    // Smooth scrolling for auth section and highlight effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Switch to the correct form
                if (targetId === 'signup') {
                    signupToggle.click();
                } else {
                    loginToggle.click();
                }

                // Add highlight effect
                authContainer.classList.add('highlight');
                setTimeout(() => {
                    authContainer.classList.remove('highlight');
                }, 1500); // Remove highlight after 1.5 seconds
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});