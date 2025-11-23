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

function clearAllErrors() {
    clearError('email');
    clearError('password');
}

var userinfos = JSON.parse(localStorage.getItem('userinfos'))
    if(!userinfos){
        window.location = 'signup1.html'
    }

function submithandler(){
    clearAllErrors();
    clearMainError();
    
    var email = document.querySelector("#email").value
    var password = document.querySelector("#password").value
    
    let hasError = false;

    if(!email){
        showError('email', "Email address is required.")
        hasError = true;
    }
    if(!password){
        showError('password', "Password is required.")
        hasError = true;
    }

    if(hasError) {
        return;
    }
    
    if (!userinfos) {
        showMainError("Invalid Email or Password")
        return;
    }

    var loginuseremail = userinfos.find(function(userdetail){
        return userdetail.email1 == email
    })
    
    if(loginuseremail.email1 != email){
        showMainError("Invalid Email or Password")
        return
    }

    if(loginuseremail.password1 != password){
        showMainError("Invalid Email or Password")
        return
    }    
    localStorage.setItem("loginuser" , JSON.stringify(loginuseremail))
    window.location = 'index.html'
}