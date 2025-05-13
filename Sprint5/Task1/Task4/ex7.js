
function joinWords(separator = ',', ...words) {
    return words.join(separator);
  }
  console.log("Task 7 Output 1:", joinWords('-', 'apple', 'banana', 'cherry'));
  console.log("Task 7 Output 2:", joinWords('apple', 'banana', 'cherry'));