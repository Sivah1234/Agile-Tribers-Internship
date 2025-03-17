function factor(n) {
    let result = 1;
    for (let a = 1; a <= n; a++) {
        result *= a;
    }
    return result;
}
console.log(factor(8));
