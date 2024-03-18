document.addEventListener ("DOMContentLoaded", function() {
    let myBtn = document.getElementById("myBtn");
    let userName = document.getElementById("userName");
    myBtn.addEventListener("click", function() {
        let nameTyped = prompt("Please enter your name: ");
        userName.textContent = `Welcome, ${nameTyped}! Enjoy your stay.`;
    });
});