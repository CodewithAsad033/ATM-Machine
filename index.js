import inquirer from "inquirer";
import chalk from "chalk";
//Initialize user balance and pin code
let myBalance = 5000;
let myPin = 1111;
// print welcome message
console.log(chalk.blue("\n\tWelcome to Code with Asad - ATM Machine\n"));
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (PinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin is correct, Login Succsessfully!\n"));
    // console.log("Corrent Account Balance is ${mybalance}")
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw Amount", "Check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "select a withdrawal method",
                choices: ["Fastcash,Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawmethod === "Fastcash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select amount:",
                    choices: "[1000,2000,5000,10000,20000,50000]"
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} withdraw SuccessFully`);
                console.log(`Your remaning balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawmethod === "Enter Amount") {
            let amountans = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to with draw:"
                }
            ]);
            if (amountans.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountans.amount;
                console.log(`${amountans.amount} with draw Successfully`);
                console.log(`Your reamining balance is : ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Checkbalance") {
        console.log(`Your Account balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect try again");
}
