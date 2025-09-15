
  
function compundInterest(principal, rate, time) {
    return principal * Math.pow((1 + rate / 100), time);
}
console.log("Compound Interest:", compundInterest(1000, 5, 10));