//High School Grader:create an array of five numeric test scores and write code to calculate and log their average.

let scores = [80, 75, 90, 85, 70];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

let average = sum / scores.length;

console.log("Average marks:", average);
