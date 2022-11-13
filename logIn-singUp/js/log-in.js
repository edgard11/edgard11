let openOne = document.getElementById('openOne');
let openTwo = document.getElementById('openTwo');
let areaOne = document.getElementById('areaOne');
let areaTwo = document.getElementById('areaTwo');
let inptOne = document.getElementById('inptOne');
let inptTwo = document.getElementById('inptTwo');
let name = document.getElementById('name');
let pswOne = document.getElementById('pswOne');
let pswTwo = document.getElementById('pswTwo');
openone = false;
opentwo = false;
signUp = false;
function HiddenOne(){
    if(!openone){
        openOne.src = "css/photos/eye-open.png";
        pswOne.type = "text";
        openone = true;
    }else{
        openOne.src = "css/photos/eye-close.png";
        pswOne.type = "password";
        openone = false;
    }
}
function HiddenTwo(){
    if(!opentwo){
        openTwo.src = "css/photos/eye-open.png";
        pswTwo.type = "text";
        opentwo = true;
    }else{
        openTwo.src = "css/photos/eye-close.png";
        pswTwo.type = "password";
        opentwo = false;
    }
}
function btnOne(){
    if(inptOne.value != JSON.parse(localStorage.getItem("email")) || pswOne.value != JSON.parse(localStorage.getItem("password"))){
        alert("your email and password is incorrect");
    }else{
        alert("welcome " + JSON.parse(localStorage.getItem("name")))
    }
}
function btnTwo(){
    if(name.value == "" || inptTwo.value == "" || pswTwo.value == ""){
        alert("empty");
    }else{
        btn = document.getElementById("btn");
        localStorage.setItem("name", JSON.stringify(name.value));
        localStorage.setItem("email", JSON.stringify(inptTwo.value));
        localStorage.setItem("password", JSON.stringify(pswTwo.value));
        alert("account is create");
        btn.href = "log-in.html";
    }
}