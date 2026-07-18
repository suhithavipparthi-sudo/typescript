function greet(name: string): string {
    return `Hello ${name}, Nice to meet you!`;
}
function getLocation(city: string = "Bangalore"): string {
    return `Location: ${city}`;
}
function sendAlert(phnumber: number, message?: string): void {
    console.log(`Phone Number: ${phnumber}`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
function calculateTotalScore(...score: number[]): number {
    return score.reduce((total, current) => total + current, 0);
}
console.log(greet("Ruru"));
console.log(getLocation());
console.log(getLocation("Nepal"));
sendAlert(9878654528);
sendAlert(8987565482, "Movie starts now!");
const total = calculateTotalScore(10, 20, 30, 40);
console.log(`Total Score: ${total}`);