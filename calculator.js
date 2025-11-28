const prompt = require('prompt-sync')();

let again = "yes";

while (again.toLowerCase() === "yes") {
    let num1 = Number(prompt("Enter the first number: "));//Number used to onverts the input string into a number
    let num2 = Number(prompt("Enter the second number: "));
    let operator = prompt("Enter operator (+, -, *, /): ");

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero!");
        } else {
            result = num1 / num2;
        }
    } else {
        console.log("Invalid operator!");
    }

    if (result !== undefined) {
        console.log(`Result: ${result}`);
    }

    again = prompt("Do you want to calculate again? (yes/no): ");
}
