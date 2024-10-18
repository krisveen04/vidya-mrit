function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in both fields.";
        return false;
    }
    if (username === "testuser" && password === "password123") {
        alert("Login successful!");
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password.";
        return false;}
}
function handleLogin() {
    window.location.href = 'index.html';

}