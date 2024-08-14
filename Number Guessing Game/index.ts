#! usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a number

// 2) User input fro guessing a number

// 3) Compare user input with computer generated number and show result

const randomNumber= Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Guess a number between 1-6:"
    }
])

if (answer.userGuessedNumber===randomNumber){
    console.log("Congrats! You guessed correct number")
} else{
    console.log("You guessed wrong number!")
};