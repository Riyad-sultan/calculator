const prompt = require('prompt-sync')();

// Step 1: Get operator (default +)
let operator = prompt("Enter operator (+, -, *, /) [default +]: ") || "+";

// Step 2: Get numbers (comma separated)
let input = prompt("Enter numbers separated by comma (e.g., 5,10,15) [default 0]: ") || "0";
let numbers = input.split(",").map(Number);

// Step 3: Calculation function
const calculate = (operator, ...nums) => {
    let result;

    if (operator === "+") {
        result = nums.reduce((total, n) => total + n, 0);
    } else if (operator === "-") {
        result = nums.reduce((total, n) => total - n);
    } else if (operator === "*") {
        result = nums.reduce((total, n) => total * n, 1);
    } else if (operator === "/") {
        if (nums.includes(0)) {
            console.log("Error: Division by zero!");
            return;
        }
        result = nums.reduce((total, n) => total / n);
    } else {
        console.log("Invalid operator!");
        return;
    }

    console.log(`Result: ${result}`);
};

// Step 4: Run calculation
calculate(operator, ...numbers);
