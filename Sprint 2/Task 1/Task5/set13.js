let evenCount = 0, oddCount = 0;
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) evenCount++;
    else oddCount++;
}
console.log(`Even: ${evenCount}, Odd: ${oddCount}`);
