
function findBookByTitle(books, title) {
    return books.find(book => book.title === title);
  }
  
  const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ];
  
  console.log('Task 2 Output:', findBookByTitle(books, 'To Kill a Mockingbird'));