#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\natm made by Uzair Bin Asif\n")

let myBalance = 95000;
let personalPin = await inquirer.prompt([
  {
    name:"customPin",
    message:"Please set your 4-8 digit atm pin here: ",
    type:"number",
  }
]);

console.log("\nYour current Balance is: Rs." + myBalance);

let answerPin = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your 4-8 digit Pin",
    type: "number",
  },
]);
if (answerPin.pin === personalPin.customPin) {
  let chooseBetween = await inquirer.prompt([
    {
      name: "operation",
      message: "Select your desired operation",
      type: "list",
      choices: ["Cash withdraw", "fast cash", "Check my balance"],
    },
  ]);
  if (chooseBetween.operation === "fast cash") {
    let fastCashoption = await inquirer.prompt([
      {
        name: "amount",
        message: "Select from Below",
        type: "list",
        choices:["500", "1000", "5000", "25000", "50000", "100000"]
      },
    ]);
    myBalance-=fastCashoption.amount
    console.log(`Please take your Rs.${fastCashoption.amount} cash out`);
    console.log("\nYour Current Balance is: Rs." + myBalance);
  }
  else if (chooseBetween.operation === "Cash withdraw") {
    let withdrawAmount = await inquirer.prompt([
      {
        name: "amount",
        message:
          "Enter the amount to withdraw: ",
        type: "number",
      },
    ]);
    if(withdrawAmount.amount > 95000){
        console.log("Unsufficient funds!")

    } else{
        myBalance -= withdrawAmount.amount;
        console.log(`Please take your Rs.${withdrawAmount.amount} cash out`);
        console.log("\nYour Current Balance is: Rs." + myBalance);
}
  }

  else if (chooseBetween.operation === "Check my balance") {
    console.log("Your current account balance is Rs.",myBalance);
  }
} 

else {
  console.log("Incorrect Pin");
}

console.log("\nTo see complete code, visit: https://github.com/UzairBinAsif")
console.log("please visit my Linkedin profile: https://www.linkedin.com/in/uzair-bin-asif-a6782529a/")
console.log("To see npm package, visit: https://www.npmjs.com/package/k2cr2o7_atm")