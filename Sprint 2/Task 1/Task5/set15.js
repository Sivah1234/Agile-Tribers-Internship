function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let numbers = [7, 8, 9];
let factorials = numbers.map(factorial);
console.log(factorials);
