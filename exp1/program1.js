"use strict";
let username = "Suhi";
let userage = 19;
let ismember = true;
console.log("Data type of UserName is -->", typeof username);
console.log("Data type of UserAge is -->", typeof userage);
console.log("Data type of IsMember is -->", typeof ismember);
function displayUserDetails(name, age, active) {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Active: ${active}`);
}
displayUserDetails(username, userage, ismember);
