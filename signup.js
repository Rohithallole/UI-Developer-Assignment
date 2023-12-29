function validationofsignuppassword(){

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if(name === "ashok" && number === "123456789" && email === "ashok@gmail.com" && username === "admin" && password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)){
        return true;
    }else{
        return false;
    }
}



function handlelogin(event){

    event.preventDefault();

    
    if(validationofsignuppassword){
        window.location.href="login.html";
    }else{
        alert("Invalid username or password. Please try again.  password must be greater than 8 character." + " It must contain 0-9,a-z,A-z in it.");
    }
}

document.getElementById("signupform").addEventListener("submit", handlelogin);