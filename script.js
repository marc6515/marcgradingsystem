document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');
    const dashboard = document.getElementById('dashboard');
    const loginError = document.getElementById('login-error');
    const addStudentButton = document.getElementById('add-student-button');
    const logoutButton = document.getElementById('logout-button');

    const studentNameInput = document.getElementById('student-name');
    const subject1Input = document.getElementById('subject1');
    const subject2Input = document.getElementById('subject2');
    const subject3Input = document.getElementById('subject3');
    const subject4Input = document.getElementById('subject4');
    const subject5Input = document.getElementById('subject5');
    const studentsTableBody = document.querySelector('#students-table tbody');

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

    addStudentButton.addEventListener('click', function() {
        const name = studentNameInput.value.trim();
        const math = parseInt(subject1Input.value) || 0;
        const english = parseInt(subject2Input.value) || 0;
        const science = parseInt(subject3Input.value) || 0;
        const filipino = parseInt(subject4Input.value) || 0;
        const pe = parseInt(subject5Input.value) || 0;

        if (!name) {
            alert('Please enter the student\'s name.');
            return;
        }

        const total = math + english + science + filipino + pe;
        const average = total / 5;

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

        // Add the student to the table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td style="color:${math >= 75 ? '#4CAF50' : '#f44336'}">${math}</td>
            <td style="color:${english >= 75 ? '#4CAF50' : '#f44336'}">${english}</td>
            <td style="color:${science >= 75 ? '#4CAF50' : '#f44336'}">${science}</td>
            <td style="color:${filipino >= 75 ? '#4CAF50' : '#f44336'}">${filipino}</td>
            <td style="color:${pe >= 75 ? '#4CAF50' : '#f44336'}">${pe}</td>
            <td>${total}</td>
            <td>${average.toFixed(2)}</td>
            <td>${grade}</td>
        `;
        studentsTableBody.appendChild(row);

        // Clear inputs
        studentNameInput.value = '';
        subject1Input.value = '';
        subject2Input.value = '';
        subject3Input.value = '';
        subject4Input.value = '';
        subject5Input.value = '';
    });

    logoutButton.addEventListener('click', function() {
        dashboard.style.display = 'none';
        loginPage.style.display = 'block';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        studentNameInput.value = '';
        subject1Input.value = '';
        subject2Input.value = '';
        subject3Input.value = '';
        subject4Input.value = '';
        subject5Input.value = '';
        studentsTableBody.innerHTML = '';
    });
});