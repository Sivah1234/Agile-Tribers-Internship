
function filterWordsByLength(words) {
    return words.filter(word => word.length > 5);
  }
  
  
  const words = ['apple', 'banana', 'cherry', 'strawberry', 'orange', 'fig', 'grape'];
  const result2 = filterWordsByLength(words);
  console.log(result2);