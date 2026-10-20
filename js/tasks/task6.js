//factorial calculator:use a while loop to calculate and print the factorial of a given number n(e.g., 5 becomes 120).
let n = 5;
let fact = 1;
let i = 1;

while (i <= n) {
    fact = fact * i;
    i++;
}

console.log(fact);
