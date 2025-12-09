// changes place holder's color while typing
const username = document.getElementById("username");
const password = document.getElementById("password");

username.addEventListener("input", () => {
    username.style.color = "#c44bff";
});

// Password = Neon Pink
password.addEventListener("input", () => {
    password.style.color = "#ff2ea7";
});

// for the password strength
const strengthText = document.getElementById("strength");

password.addEventListener("input", () => {
    const pw = password.value;

    if (pw.length < 4) {
        strengthText.textContent = "Weak password";
        strengthText.style.color = "red";
    } else if (pw.length < 8) {
        strengthText.textContent = "Medium strength";
        strengthText.style.color = "yellow";
    } else {
        strengthText.textContent = "Strong password";
        strengthText.style.color = "#00eaff";
    }
});
