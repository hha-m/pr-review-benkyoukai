// script.js

// Function to print a random number
function printRandomNumber() {
    const outputElement = document.getElementById("output");
    const randomNumber = Math.floor(Math.random() * 100);
    outputElement.textContent = "Random Number: " + randomNumber;
}

// Add event listeners to call the functions when the button is clicked
document.getElementById("printButton").addEventListener("click", function () {
    // Call the functions
    printRandomNumber();
});
