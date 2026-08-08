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

let currentQuestion = 0;
let score = 0;


let questions = [

{
question:"Which planet is called Red Planet?",
options:["Earth","Mars","Jupiter","Venus"],
answer:1
},

{
question:"HTML is used for?",
options:["Programming","Website Structure","Database","AI"],
answer:1
},

{
question:"2 + 5 = ?",
options:["5","6","7","8"],
answer:2
}

];


function loadQuiz(){

let q = questions[currentQuestion];

document.getElementById("question").innerHTML=q.question;

document.getElementById("option1").innerHTML=q.options[0];
document.getElementById("option2").innerHTML=q.options[1];
document.getElementById("option3").innerHTML=q.options[2];
document.getElementById("option4").innerHTML=q.options[3];

}


function answer(choice){

if(choice == questions[currentQuestion].answer){

score++;

}

currentQuestion++;


if(currentQuestion < questions.length){

loadQuiz();

}

else{

document.getElementById("question").innerHTML =
"Quiz Completed 🎉";

}


document.getElementById("score").innerHTML =
"Score: " + score;

}


loadQuiz();

let notes = JSON.parse(localStorage.getItem("notes")) || [];


function saveNote(){

let title =
document.getElementById("noteTitle").value;

let text =
document.getElementById("noteText").value;


notes.push({
title:title,
text:text
});


localStorage.setItem("notes",JSON.stringify(notes));


displayNotes();


document.getElementById("noteTitle").value="";
document.getElementById("noteText").value="";

}


function displayNotes(){

let box=document.getElementById("savedNotes");

box.innerHTML="";


notes.forEach((note,index)=>{

box.innerHTML += `

<div class="note">

<h4>${note.title}</h4>

<p>${note.text}</p>

<button onclick="deleteNote(${index})">
Delete
</button>

</div>

`;

});

}



function deleteNote(index){

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

displayNotes();

}


displayNotes();

function changeTheme(){

document.body.classList.toggle("light");

}
