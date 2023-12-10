const ol = document.querySelector('ol');
const list = [
   {
        name: "Oppenheimer",
        year: 2023,
        director: "Christopher Nolan",
        poster: "https://www.dmarge.com/wp-content/uploads/2022/07/oppenheimer-poster-768x960.jpg"
   },
    {
        name: "Barbie",
        year: 2023,
        director: "Greta Gerwig",
        poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/barbie-movie-poster.jpg"
    },
    {
        name: "Godzilla Minus One",
        year: 2023,
        director: "Takashi Yamazaki",
        poster: "https://www.voicesfromthebalcony.com/wp-content/uploads/2023/12/Godzilla-Minus-One-Poster.jpg"
    },
];

const li = `
    <li>
        <p>Movie: ${list[0].name}</p>
        <p>Year: ${list[0].year}</p>
        <p>Director: ${list[0].director}</p>
        <img src=${list[0].poster} height="400">
    </li>
`

const template = list.map(movie =>
    `
    <li>
        <p>Movie: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <img src=${movie.poster} height="400">
    </li>
`
);

ol.innerHTML = template.join('');





