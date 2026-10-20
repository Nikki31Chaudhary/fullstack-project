//palindrome checker:write an arrow function that returns true if a string reads the same backward as forward ,and false otherwsie.

const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
