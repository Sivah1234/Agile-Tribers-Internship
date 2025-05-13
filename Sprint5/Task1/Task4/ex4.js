
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findFirstPrime(numbers) {
    return numbers.find(isPrime);
  }
  const numberArray = [4, 6, 8, 9, 11, 15];
  console.log("Task 4 Output:", findFirstPrime(numberArray));