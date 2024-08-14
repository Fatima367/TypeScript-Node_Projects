import inquirer from "inquirer";
const curreny = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.95,
    PKR: 278.33
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From curreny",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter To curreny",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter from curreny",
        type: "number",
    }
]);
let fromAmount = curreny[user_answer.from];
let toAmount = curreny[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //Converted to USD (base currency)
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
