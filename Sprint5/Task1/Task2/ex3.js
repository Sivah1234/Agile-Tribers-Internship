
async function fetchDataWithFetch(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('EX3 Output:',data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchDataWithFetch('https://jsonplaceholder.typicode.com/todos/1');