#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        message: "Guess a Number between 1 to 10:",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(`You : ${answers.userGuessedNumber}, computer : ${randomNumber}`);
}
else {
    console.log(`You : ${answers.userGuessedNumber}, computer : ${randomNumber}`);
}
