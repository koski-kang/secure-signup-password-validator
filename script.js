const passwordBarsDiv = document.querySelector('.password-checks');

const passwordInput = document.getElementById('password');

// Updates for all binary test cases
const updateBar = (ruleId, isValid) => {
    const rule = document.getElementById(ruleId);
    const fill = rule.querySelector('.bar-fill');

    if (isValid) {
        fill.style.width = '100%';
        fill.style.background = '#4caf50';
    }
    else {
        fill.style.width = '20%';
        fill.style.background = '#f44336';
    }
}

// Updates for password length case
const updateLengthBar = (password) => {
    fill = document
        .getElementById('length')
        .querySelector('.bar-fill');

    len = password.length;

    if (len < 4) {
        fill.style.width = '25%';
        fill.style.background = '#f44336';
    }
    else if (len === 4) {
        fill.style.width = '50%';
        fill.style.background = '#ff9800';
    }
    else if (len === 5 || len === 6) {
        fill.style.width = '75%';
        fill.style.background = '#ff9800'; 
    }
    else if (len === 7) {
        fill.style.width = '90%';
        fill.style.background = '#ff9800'; 
    }
    else {
        fill.style.width = '100%';
        fill.style.background = '#4caf50'; 
    }
}

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();
    if (password !== '') {
        passwordBarsDiv.style.display = 'block';
        updateLengthBar(password);

        updateBar('uppercase', /[A-Z]/.test(password));
        updateBar('lowercase', /[a-z]/.test(password));
        updateBar('number', /[0-9]/.test(password));
        updateBar('character', /[^A-Za-z0-9]/.test(password));

    }
    else {
        passwordBarsDiv.style.display = 'none';
    }
})

