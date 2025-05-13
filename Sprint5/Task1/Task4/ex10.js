
function productsAboveAverage(products) {
    const totalPrice = products.reduce((total, { price }) => total + price, 0);
    const averagePrice = totalPrice / products.length;
  
    return products
      .filter(({ price }) => price > averagePrice)
      .map(({ name }) => name);
  }
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
  ];
  console.log("Task 10 Output:", productsAboveAverage(products));