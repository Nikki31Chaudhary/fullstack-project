// fizzbuzz basic:print "fizz" if a number is divisible by 3,"buzz"if by 5,"fizzbuzz" if by both,or the number itself if none.

let number = 28;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(number);
}
