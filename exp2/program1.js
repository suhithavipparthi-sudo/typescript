"use strict";
function greet(name) {
    return `Hello ${name}, Nice to meet you!`;
}
function getLocation(city = "Bangalore") {
    return `Location: ${city}`;
}
function sendAlert(phnumber, message) {
    console.log(`Phone Number: ${phnumber}`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
function calculateTotalScore(...score) {
    return score.reduce((total, current) => total + current, 0);
}
console.log(greet("Ruru"));
console.log(getLocation());
console.log(getLocation("Nepal"));
sendAlert(9878654528);
sendAlert(8987565482, "Movie starts now!");
const total = calculateTotalScore(10, 20, 30, 40);
console.log(`Total Score: ${total}`);
