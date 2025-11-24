function showError(elementId, message) {
    var element = document.querySelector("#" + elementId);
    var errorSpan = document.querySelector("#" + elementId + "-error");
    
    if (element) {
        element.classList.add('error-border');
    }
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}
function showMainError(message) {
    document.querySelector("#main-error").textContent = message;
    document.querySelector("#main-error").style.display = 'block';
}

function clearMainError() {
    document.querySelector("#main-error").textContent = '';
    document.querySelector("#main-error").style.display = 'none';
}
// Ye function border clear karne ke liye hai (standard practice)
function clearAllErrors() {
    ['firstname', 'lastname', 'username', 'email', 'password', 'confirmpassword'].forEach(clearError);
}

function clearError(elementId) {
    var element = document.querySelector("#" + elementId);
    var errorSpan = document.querySelector("#" + elementId + "-error");
    
    if (element) {
        element.classList.remove('error-border');
    }
    if (errorSpan) {
        errorSpan.textContent = '';
    }
}

function submithandler() {

    clearAllErrors(); // Har submit se pehle borders hat jayein

    var userinfos = JSON.parse(localStorage.getItem('userinfos')) || []

    var firstname = document.querySelector('#firstname').value
    var lastname = document.querySelector('#lastname').value
    var username = document.querySelector('#username').value
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value
    var confirmpassword = document.querySelector('#confirmpassword').value
    var check = document.querySelector('#check').checked

    if (firstname && lastname && username && email && password && confirmpassword && check) {
        username.toLowerCase()
        var username1 = [...username]
        var username2 = []
        alphabates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        alphabates.forEach(function (letter) {
            username1.forEach(function (letters) {
                if (letter == letters) {
                    username2.push(letters)
                }
            })
        });
        if (username1.length != username2.length) {
            showError('username', 'Username Contain Only letters.')
            return
        }
        var email1 = [...email]
        var email2 = []
        email1.forEach(function (letter) {
            if (letter == '@') {
                email2.push(letter)
            }
        })
        if (email2.length != 1) {
            showError('email', 'Invalid Email.')
            return
        }
        var password1 = [...password]
        if (password1.length < 8) {
            showError('password', 'Password At Lest 8 Characters')
            return
        }
        var password2 = []
        alphabates.forEach(function (letter) {
            password1.forEach(function (letters) {
                if (letter == letters) {
                    password2.push(letters)
                }
            })
        });
        var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        var password3 = []
        number.forEach(function (digit) {
            password1.forEach(function (digit1) {
                if (digit1 == digit) {
                    password3.push(digit)
                }
            })
        })
        if (password1.length == password2.length) {
            showError('password', 'Contain Numbers , Letters & Special Characters ')
            return
        }
        if (password3.length == password1.length) {
            showError('password', 'Contain Numbers , Letters & Special Characters ')
            return
        }
        var confirmpassword1 = [...confirmpassword]
        var confirmpassword2 = []
        var i = 0
        confirmpassword1.forEach(function (digit3) {
            if (digit3 == password1[i]) {
                confirmpassword2.push(digit3)
                i++
            }
        })
        if (confirmpassword1.length != confirmpassword2.length) {
            showError('confirmpassword', 'Confirm Password Is not Matched')
            return
        }
        var emailcheck = userinfos.find(function(userdata){
            return userdata.email1 == email
        })
        if(emailcheck){
            showMainError( 'Already Logged In Go TO Login')
            return
        }

        const userdetail = {
            firstname: firstname ,
            lastname: lastname ,
            username1: username ,
            email1: email ,
            password1: password ,
        }
        
        userinfos.push(userdetail)
        localStorage.setItem('userinfos',JSON.stringify(userinfos))
        window.location = 'login1.html'
    }
    else {
        if(!firstname){
           showError('firstname', 'First name is required.')
        }
        if(!lastname){
           showError('lastname', 'Last name is required.')
        }
        if(!username){
           showError('username', 'Username is required.')
        }
        if(!email){
           showError('email', 'Email is required.')
        }
        if(!password){
           showError('password', 'Password is required.')
        }
        if(!confirmpassword){
           showError('confirmpassword', 'Confirm password is required.')
        }
        if(!check){
            showError('check', ' Check The Terms & Conditions.')
        }
    }
}