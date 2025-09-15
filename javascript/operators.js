function calculator(a, b, operator) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    } else {
        return "Invalid operator";
    }
}
console.log("Addition:", calculator(8, 2, '+'));
console.log("Subtraction:", calculator(8, 2, '-'));
console.log("Multiplication:", calculator(8, 2, '*'));
console.log("Division:", calculator(8, 2, '/'));
