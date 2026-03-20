function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "admin@mobility.com" && password === "12345"){
window.location="journey.html";
}else{
document.getElementById("message").innerHTML="Invalid Login";
}

}