// Hardcoded username and password
const VALID_USERNAME = "druggpt";
const VALID_PASSWORD = "oxfordchilab";

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Redirect to a new page
        window.location.href = "https://demo-drug-gpt.vercel.app/en";
    } else {
        // Show error message
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
