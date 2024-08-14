#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", 
    type: "number",
     name: "FirstNumber" },
  { message: "Enter second number",
     type: "number", 
     name: "Secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statement
if (answer.Operator === "Addition") {
  console.log(`Your answer is: ${answer.FirstNumber+answer.Secondnumber}`);
}
else if (answer.Operator==="Subtraction"){
  console.log(`Your answer is: ${answer.FirstNumber-answer.Secondnumber}`);
}
else if (answer.Operator==="Multiplication"){
  console.log(`Your answer is:${answer.FirstNumber*answer.Secondnumber}`);
}
else if (answer.Operator==="Division"){
  console.log(`Your answer is: ${answer.FirstNumber/answer.Secondnumber}`);
};
