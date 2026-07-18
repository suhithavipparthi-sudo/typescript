"use strict";
let moviename = "transformers";
let movierating = 4.5;
let isreleased = true;
function displayMovieDetails(name, rating) {
    return `Movie: ${name} was rated Rating: ${rating}.`;
}
let leadactors = ["steve", "mille", "optimus prime"];
const summary = displayMovieDetails(moviename, movierating);
console.log(summary);
console.log("Lead actors are -->", leadactors);
