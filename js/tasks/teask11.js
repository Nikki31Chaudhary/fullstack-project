//shopping cart total:use the .reduce() method on an array of item prices to calculate the total sum.

let prices = [100, 250, 150, 200];

let total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);