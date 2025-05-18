document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');
    const dashboard = document.getElementById('dashboard');
    const loginError = document.getElementById('login-error');
    const calculateButton = document.getElementById('calculate-button');
    const logoutButton = document.getElementById('logout-button');

    const subject1Input = document.getElementById('subject1');
    const subject2Input = document.getElementById('subject2');
    const subject3Input = document.getElementById('subject3');

    const displayTotal = document.getElementById('display-total');
    const displayAverage = document.getElementById('display-average');
    const displayGrade = document.getElementById('display-grade');

    // Individual result elements
    const resultMath = document.getElementById('result-math');
    const resultEnglish = document.getElementById('result-english');
    const resultScience = document.getElementById('result-science');

    // Dummy user credentials (FOR DEMO PURPOSES ONLY)
    const validUsername = 'marc';
    const validPassword = '1234';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            loginPage.style.display = 'none';
            dashboard.style.display = 'block';
            loginError.style.display = 'none';
        } else {
            loginError.style.display = 'block';
        }
    });

    calculateButton.addEventListener('click', function() {
        const math = parseInt(subject1Input.value) || 0;
        const english = parseInt(subject2Input.value) || 0;
        const science = parseInt(subject3Input.value) || 0;

        // Individual subject remarks (pass if >= 75)
        resultMath.textContent = math >= 75 ? "Pass" : "Fail";
        resultMath.style.color = math >= 75 ? "#4CAF50" : "#f44336";

        resultEnglish.textContent = english >= 75 ? "Pass" : "Fail";
        resultEnglish.style.color = english >= 75 ? "#4CAF50" : "#f44336";

        resultScience.textContent = science >= 75 ? "Pass" : "Fail";
        resultScience.style.color = science >= 75 ? "#4CAF50" : "#f44336";

        // Total, average, and grade
        const total = math + english + science;
        const average = total / 3;

        let grade;
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 75) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        displayTotal.textContent = total;
        displayAverage.textContent = average.toFixed(2);
        displayGrade.textContent = grade;
    });

    logoutButton.addEventListener('click', function() {
        dashboard.style.display = 'none';
        loginPage.style.display = 'block';

        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        subject1Input.value = '';
        subject2Input.value = '';
        subject3Input.value = '';

        // Clear displayed data
        displayTotal.textContent = 0;
        displayAverage.textContent = 0;
        displayGrade.textContent = '';
        resultMath.textContent = '';
        resultEnglish.textContent = '';
        resultScience.textContent = '';
    });
});