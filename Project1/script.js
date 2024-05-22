const userInput = prompt("Enter value: Rock, Paper, Scissor");
const userInputLower = userInput.toLowerCase();
const comArr = ["rock", "paper", "scissor"];

const randomVal = Math.floor(Math.random() * 3);

console.log(comArr[randomVal]);

if (comArr[randomVal] == userInputLower) {
  alert("Match Draw!");
}

// Assigments - when user enters an invalid value which is not related to rock paper and scrissor throw an erro that says: invalid value

if (comArr != userInputLower) {
  alert("Invalid value ");
}

// When user wins
if (comArr[randomVal] == "rock" && userInputLower == "paper") {
  alert("User is winner!");
}
if (comArr[randomVal] == "paper" && userInputLower == "scissor") {
  alert("User is winner!");
}
if (comArr[randomVal] == "scissor" && userInputLower == "rock") {
  alert("User is winner!");
}

// When computer wins
if (userInputLower == "rock" && comArr[randomVal] == "paper") {
  alert("Computer is winner!");
}
if (userInputLower == "paper" && comArr[randomVal] == "scissor") {
  alert("Computer is winner!");
}
if (userInputLower == "scissor" && comArr[randomVal] == "rock") {
  alert("Computer is winner!");
}

console.log("Computer: " + comArr[randomVal]);
console.log("User: " + userInputLower);
