var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

console.log(chalk.blue("Welcome to Money Heist Quiz!"));
 
var userName = readlineSync.question('What is your name?    ');

console.log(chalk.cyan.bold("Welcome " + userName + " to the quiz. For every correct answer you will get one point"));

console.log(chalk.blue("LET'S START THE QUIZ..."));


function quiz (question, answer){
  var useranswer = readlineSync.question(question);

  if(useranswer === answer){
    console.log(chalk.green("You're right!"))
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong answer!"))
    score = score;
  }
  console.log("Your score is " + score)
  console.log(".............")
}

var questions = [{
  question: "How much currency does the gang print at the Royal Mint? ",
  answer: "984 million euros"
}, 
{
  question: "How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain? ",
  answer: "8"
}, 
{
  question: "“Let the matriarchy begin”: Whose words are these? ",
  answer: "Nairobi"
},
{
  question: "In which country does Raquel track the Professor after the first heist? ",
  answer: "Philippines"
},
{
  question: "How were The Professor and Berlin related to each other? ",
  answer: "Brothers"
},
{
  question: "Which city name is not an alias for any of the gang members? ",
  answer: "Beijing"
},
{
  question: "Who did Gandia lock up in the Bank’s panic room? ",
  answer: "Tokyo"
},
{
  question: "What does Inspector Raquel do just before she starts a negotiation call? ",
  answer: "Tie her hair"
}
];

for (i=0; i<questions.length; i++) {
  var currentquestion = questions[i];
  quiz(currentquestion.question, currentquestion.answer)
}

console.log(chalk.green("Your total score is " + score))