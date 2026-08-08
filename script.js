// Digital Clock

function updateClock(){

let time=new Date();

document.getElementById("clock").innerHTML =
time.toLocaleTimeString();

}

setInterval(updateClock,1000);


// Notes Save

function saveNotes(){

let data=document.getElementById("notes").value;

localStorage.setItem("studentNotes",data);

alert("Notes Saved!");

}


// Load Notes

window.onload=function(){

document.getElementById("notes").value =
localStorage.getItem("studentNotes") || "";

}

let expression="";


function add(value){

expression += value;

document.getElementById("display").value = expression;

}


function clearDisplay(){

expression="";

document.getElementById("display").value="";

}


function calculate(){

try{

expression = eval(expression);

document.getElementById("display").value = expression;

}

catch{

document.getElementById("display").value="Error";

}

}
