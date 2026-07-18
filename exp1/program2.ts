let flexiblevalue:any=10;
flexiblevalue="Now Im a string";
flexiblevalue=true;
let mysteryvalue:unknown="Hello shreya";
if(typeof mysteryvalue==="string"){
    console.log("Length of unknown string is -->"+mysteryvalue.length);
}
function lognotification(message:string):void{
    console.log("alert:"+message);
}
lognotification("Environment Setupm Complete!");