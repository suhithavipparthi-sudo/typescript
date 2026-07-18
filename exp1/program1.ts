let username: string = "Suhi";
let userage: number = 19;
let ismember: boolean = true;
console.log("Data type of UserName is -->", typeof username);
console.log("Data type of UserAge is -->", typeof userage);
console.log("Data type of IsMember is -->", typeof ismember);
function displayUserDetails(name: string, age: number, active: boolean): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Active: ${active}`);
}
displayUserDetails(username, userage, ismember);