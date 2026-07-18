"use strict";
let flexiblevalue = 10;
flexiblevalue = "Now Im a string";
flexiblevalue = true;
let mysteryvalue = "Hello shreya";
if (typeof mysteryvalue === "string") {
    console.log("Length of unknown string is -->" + mysteryvalue.length);
}
function lognotification(message) {
    console.log("alert:" + message);
}
lognotification("Environment Setupm Complete!");
