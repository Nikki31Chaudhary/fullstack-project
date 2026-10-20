// vowel counter:write a function that loops throungh a string and string and returns the total count of vowels(a,e,i,o,u)inside it.
function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));