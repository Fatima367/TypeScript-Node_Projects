import inquirer from "inquirer";

const curreny: any = {
    USD:1,  //BASE CURRENCY
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280
}

let user_answer = await inquirer.prompt([
    {
        name:"from",
        message:"Enter From curreny",
        type:"list",
        choices:['USD','EUR','GBP','INR','PKR']
    },
    {
        name:"to",
        message:"Enter To curreny",
        type:"list",
        choices:['USD','EUR','GBP','INR','PKR']
    },
    {
        name:"amount",
        message:"Enter from curreny",
        type:"number",
    }
]);

let fromAmount = curreny[user_answer.from];
let toAmount = curreny[user_answer.to];
let amount = user_answer.amount;

let baseAmount = amount / fromAmount; //Converted to USD (base currency)

let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);