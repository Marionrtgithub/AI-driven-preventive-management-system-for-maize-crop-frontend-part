console.log("Welcome to the Crop Health Monitoring System!");

function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email == "" || password == "") {
        alert("Please fill in both fields.");
        return false;  
    }
    if (email === "test@farmer.com" && password === "password123") {
        window.location.href = "dashboard.html";  
    } else {
        alert("Invalid credentials. Please try again.");
        return false;  
    }
    return false;  
}



