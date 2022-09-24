//install package readline-sync
var x=require('readline-sync');

//welcome Message
console.log("Hi! I am Gourob,I made this CLI app")
var name = x.question("What's your name? ");
console.log("Hello "+name.toUpperCase()+"!  Let's play a game about my favourite web series Little Things(on Netflix)");
console.log("-----------------------");

//declare variables
var y="Yay! you're right";
var n="Uh-oh! you're wrong";
var score = 0;


//creating function
function check(questionAsked,answerCorrect){
  var userAnswer=x.question(questionAsked);

  //checking answer
  if(answerCorrect.toUpperCase()==userAnswer.toUpperCase()){
    score += 1;
    console.log(y);
  }
  else{
    console.log(n);
    console.log("Correct answer is :"+answerCorrect);
  }

  //current score
  console.log("Current Score :"+score);
  console.log("-----------------------");
}

//create objects
//key:value
var q1={
  q:"What is the name of the food item that is also the nickname of Dhruv? ",
  a:"Momo"
}
var q2={
  q:"What is the name of the food item that is also the nickname of Kavya ? ",
  a:"Biriyani"
}
var q3={
  q:"Where did Dhruv and Kavya first met? ",
  a:"Movie"
}
var q4={
  q:"How many seasons are there in the show? ",
  a:"4"
}
var q5={
  q:"Did Dhruv and Kavya get engaged/married? ",
  a:"Engaged"
}


//creating array of objects
var qa=[q1,q2,q3,q4,q5];

//accessing array
for(var i=0;i<qa.length;i++){
  check(qa[i].q,qa[i].a)
}

//final score and thank you Message
console.log("Final Score : " + score +"/5");
if(score<5){
  console.log("Play again to get 5/5");
}
else{
console.log("Thank you for playing my game "+name.toUpperCase());
}
//end
