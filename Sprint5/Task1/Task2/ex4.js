
function safeDivide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    } catch (error) {
      return error.message;
    }
  }
  console.log('EX4 Output:',safeDivide(4, 2)); 
  console.log(safeDivide(4, 0)); 