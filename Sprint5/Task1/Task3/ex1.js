
function longestString(arr) {
    return arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, ''); 
  }
  
  const strings = ['apple', 'banana', 'cherry', 'date'];
  console.log('Task 1 Output:', longestString(strings));