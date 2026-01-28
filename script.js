const passwordBarsDiv = document.querySelector('.password-checks');

const passwordInput = document.getElementById('password');

// Object for tracking if all condition is met and toggling submit btn enabled or disabled

const rules = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    character: false
};

// Updates for all binary test cases
const updateBar = (ruleId, isValid) => {
    const rule = document.getElementById(ruleId);
    const fill = rule.querySelector('.bar-fill');

    if (isValid) {
        fill.style.width = '100%';
        fill.style.background = '#4caf50';
        rules[ruleId] = true;
    }
    else {
        fill.style.width = '20%';
        fill.style.background = '#f44336';
        rules[ruleId] = false;
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
        rules.length = false;
    }
    else if (len === 4) {
        fill.style.width = '50%';
        fill.style.background = '#ff9800';
        rules.length = false;
    }
    else if (len === 5 || len === 6) {
        fill.style.width = '75%';
        fill.style.background = '#ff9800'; 
        rules.length = false;
    }
    else if (len === 7) {
        fill.style.width = '90%';
        fill.style.background = '#ff9800'; 
        rules.length = false;
    }
    else {
        fill.style.width = '100%';
        fill.style.background = '#4caf50'; 
        rules.length = true;
    }
}

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();
    if (password !== '') {
        passwordBarsDiv.style.display = 'block';
        passwordBarsDiv.classList.add('show');

        updateLengthBar(password);

        updateBar('uppercase', /[A-Z]/.test(password));
        updateBar('lowercase', /[a-z]/.test(password));
        updateBar('number', /[0-9]/.test(password));
        updateBar('character', /[^A-Za-z0-9]/.test(password));

    }
    else {
        passwordBarsDiv.style.display = 'none';
        passwordBarsDiv.classList.remove('show');
        Object.keys(rules).forEach(key => rules[key] = false);
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
    }

    checkAllRules()
})

// Enabling submit btn after all conditions are met
const submitBtn = document.querySelector('.submit-btn');

// const checkAllValid = (rules) => {
//     for (let key in rules) {
//         if (rules[key] === false) {return false};
//     }
//     return true
// }

function checkAllRules() {

    // const allValid = checkAllValid(rules)

    const allValid = Object.values(rules).every(rule => rule === true);

    submitBtn.disabled = !allValid

    if (allValid) {
        submitBtn.classList.add('enabled');
    }
    else {
        submitBtn.classList.remove('enabled');
    }
}

// Toggle password show/hide

const togglePassword = document.getElementById('toggle-password');
togglePassword.addEventListener('click', () => {
    togglePassword.classList.toggle('fa-eye-slash');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type )
})



