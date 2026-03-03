const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {

  
    const emailInput = document.getElementById("input-email");
    const email = emailInput.value.trim();

    
    const passwordInput = document.getElementById("input-password");
    const password = passwordInput.value.trim();

   
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    
    if (email === "dummy@gmail.com" && password === "123456") {

        
        localStorage.setItem("isLoggedIn", "true");

        
        window.location.assign("home.html");

    } else {
        alert("Invalid email or password!");
    }

});