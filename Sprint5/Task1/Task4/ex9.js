
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log("Task 9 Output:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchTodo();