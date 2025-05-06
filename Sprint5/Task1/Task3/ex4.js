
function groupByProperty(arr, property) {
    return arr.reduce((acc, obj) => {
      const key = obj[property];  
      if (!acc[key]) {
        acc[key] = [];  
      }
      acc[key].push(obj);  
      return acc;
    }, {});  
  }
  
  const people = [
    { name: 'Nimi', age: 25, city: 'New York' },
    { name: 'Nile', age: 30, city: 'Los Angeles' },
    { name: 'Lekzz', age: 25, city: 'New York' },
    { name: 'Sonu', age: 30, city: 'Los Angeles' },
  ];
  
  console.log('Task 4 Output:', groupByProperty(people, 'age'));