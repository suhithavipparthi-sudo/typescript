let moviename:string="transformers";
let movierating:number=4.5;
let isreleased:boolean=true;
function displayMovieDetails(name:string,rating:number):string{
    return `Movie: ${name} was rated Rating: ${rating}.`;
}
let leadactors:string[]=["steve","mille","optimus prime"];
const summary:string=displayMovieDetails(moviename,movierating);
console.log(summary);
console.log("Lead actors are -->",leadactors);
