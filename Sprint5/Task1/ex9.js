
function containsWord(sentence, word) {
    return sentence.includes(word);
  }
  
  const sentence = 'I like maintaining you';
  const word = 'you';
  console.log(containsWord(sentence, word));