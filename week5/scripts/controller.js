function validateEmail(email) {
    let errorMsg = 'Email should have atleast 1 symbol before @, 5 symbols in the domain and have a dot in the domain!';
    
    if (email === '' || !email.includes('@') || !email.split('@')[1].includes('.') || email.split('@')[0].length == 0 || email.split('@')[1].length < 5) {
       return errorMsg;
    }

    return false;
}

function validatePassword(password) {
    let errorMsg = 'Password should have atleast 6 symbols and contain at least one of the following: uppercase letter, digit, special symbol [!@#$%^&]';

    if (password.length < 6 || !password.match('[A-Z]+') || !password.match('[0-9]+') || !password.match('[!@#$%^&]+')) {
        return errorMsg;
    }

    return false;
}

function validate(event) {
    event.preventDefault();
    let email = document.getElementsByName('email')[0].value;
    let password = document.getElementsByName('password')[0].value;
    let errors = document.getElementById('errors');
    errors.innerHTML = '';

    let emailResult = validateEmail(email);
    let passwordResult = validatePassword(password);

    if (emailResult) {
        let error = document.createElement('div');
        error.innerText = emailResult;
        errors.appendChild(error);    
    }

    errors.appendChild(document.createElement('br'));

    if (passwordResult) {
        let error = document.createElement('div');
        error.innerText = passwordResult;
        errors.appendChild(error);  
    }

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (!emailResult && !passwordResult) {
        if (page == 'index.html') {
            alert('Login is successful');
        } else if (page == 'register.html') {
            let username = document.getElementsByName('username')[0].value;

            window.auth.register(username, email, password, function (isOk, errorCode, errorMessage) {
                errors.innerHTML = '';
                if (!isOk) {
                    let error = document.createElement('div');
                    error.innerText = errorMessage;
                    errors.appendChild(error);
                } else {
                    alert('Registration is successful');
                    window.location.href = "./posts.html";
                }
            });
        }
    }
}

window.onload = () => {
    document.getElementsByClassName('auth-button')[0].addEventListener('click', validate);
}