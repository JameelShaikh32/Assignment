let newpwd = document.getElementById('newpwd');
let renewpwd = document.getElementById('renewpwd');
let form = document.getElementById('form');
let errorMessage = document.getElementById('errorMessage');
var alphabet = /^[a-zA-Z]+$/;

form.addEventListener('submit', (e) => {
    let error = [];

    if (newpwd.value.length < 8) {
        error.push("Password length is less than 8");
    } else {
        errorMessage.style.visibility = "hidden";
    }

    if (newpwd.value !== renewpwd.value) {
        error.push("Password does not match")
    } else {
        errorMessage.style.visibility = "hidden";
    }

    if (newpwd.value.match(alphabet)) {
        errorMessage.style.visibility = "hidden";
    } else {
        error.push("Password must contain only alphabets.")
        errorMessage.innerHTML = error;
    }

    if (error.length > 0) {
        e.preventDefault();
        errorMessage.style.visibility = "visible";
        errorMessage.innerHTML = error.join(", ")
    } else {
        var title = document.querySelector('.title h1');
        title.innerHTML = "Password Changed";
    }
});