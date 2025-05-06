
function flattenArray(arr) {
    return arr.reduce((flattened, current) => {
      return flattened.concat(current); 
    }, []); 
  }
  const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
  console.log('Task 2 Output:', flattenArray(nestedArray));