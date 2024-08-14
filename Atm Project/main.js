#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollars;
const myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option:",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            console.log(`Your remaining balance in ${myBalance - amountAns.amount} `);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
else {
    console.log("Incorrect pin");
}
