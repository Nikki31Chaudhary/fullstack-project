//object array finder:use the .find() method on an array of movie objects  to log the title of the first movie with a 5-star rating. 
let movies = [
    { title: "Jawan", rating: 4 },
    { title: "Pathaan", rating: 5 },
    { title: "Dangal", rating: 5 },
    { title: "3 Idiots", rating: 4 }
];

let movie = movies.find(movie => movie.rating === 5);

console.log(movie.title);