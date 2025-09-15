function areaOfSquare(side) {
    return side * side;
}
function areaOfRectangle(length, width) {
    return length * width;
}
function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}
console.log("Square area:", areaOfSquare(5));
console.log("Rectangle area:", areaOfRectangle(5, 10));
console.log("Triangle area:", areaOfTriangle(5, 8));

  function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); 
