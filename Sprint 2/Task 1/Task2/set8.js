function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Invalid operator';
    }
}

console.log("Addition: " + calculate(10, 5, '+'));
console.log("Subtraction: " + calculate(10, 5, '-'));
console.log("Multiplication: " + calculate(10, 5, '*'));
console.log("Division: " + calculate(10, 5, '/'));