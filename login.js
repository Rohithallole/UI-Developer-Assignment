function validationofpassword(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)){
        return true;
    }else{
        return false;
    }
}


function handlelogin(event){

    event.preventDefault();

    if(validationofpassword()){
        window.location.href="dashbord.html";
    }else{
        alert(" Invalid username or password. password must Please try again. password must be greater than 8 character." + " It must contain 0-9,a-z,A-z in it. ");
    }
}

document.getElementById("loginForm").addEventListener("submit", handlelogin);