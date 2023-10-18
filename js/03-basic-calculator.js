alert("Welcome to the Module 5 Calculator!");

let first;
let second;
let operator;
let again;

function calculate(first, second, operator) {
    let result;

    switch(operator) {
        case "+":
            result = first + second;
            break;
        
        case "-":
            result = first - second;
            break;
        
        case "*":
            result = first * second;
            break;

        case "/":
            result = first / second;
            break;
        
        default:
            result = NaN;
            alert("Invalid operation chosen.");
            break;
    }

    if (!isNaN(result)) {
        alert("The result of " + first + " " + operator + " " + second + " is " + result + ".");
    }

    else {
        alert("Your operation could not be completed.")
    }
}

do {
    do {
        first = parseFloat(prompt("Please enter your first number:"));
        second = parseFloat(prompt("Please enter your second number:"));
        operator = prompt("Please enter the operation (+, -, *, or /) to be performed:");

        calculate(first, second, operator);

} while (isNaN(first) || isNaN(second) || (operator !== "+") && (operator !== "-") && (operator !== "*") && (operator !== "/"));

    again = prompt("Perform another operation? Please enter \"y\" for yes and \"n\" for no.");
    
    if (again !== "y" && again !== "n") {
        if (again === "\"y\"") again = "y";
        if (again === "\"n\"") again = "n";
        else                   again = "n";
    }

} while (again === "y")

alert("Thank you for using the Module 5 Calculator!")