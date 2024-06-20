#! /usr/bin/env node
// UPLoad Through Gitup Desktop
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select any Option Below",
    type: "list",
    name: "operator",
    choices: ["Plus", "Minus", "Multiply", "Divide"],
  },
]);
// conditional statement
if (answer.operator === "Plus") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Minus") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiply") {
  console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Divide") {
  console.log(answer.firstNumber / answer.secondNumber);
} else { console.log ("YOU ARE WRONG!") }

