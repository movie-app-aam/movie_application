const url = 'https://materialistic-truthful-papaya.glitch.me/movies'
let title = document.getElementById('addMovie')
let rating = document.getElementById('addRating')
const btn1 = document.getElementById("btn1")
// btn1.addEventListener("click", createMovie)
// fetch() method used to request to the server and load the infromation from glitch on to the webpage
    fetch(url)
        .then(function (res) {
            console.log(res)
            return res.json();
        }).then(function (data) {
            console.log(data)
        $("#loading-image").addClass('hide')
        console.log(data)
// Loop in order to iterate through movie objects in array
        const htmlText = data.map(function (o) {
            // console.log(o.title)
            loadMovies(o.title)
            return`
                  `;
        })
        $('#movies').append(htmlText)
    })
// Titles: https://omdbapi.com/?s=thor&page=1&apikey=fc1fef96
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=8727ba32

const moviesSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

// load movies from API
async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=8727ba32`
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search[0]);
    if (data.Response === "True") displayMovie(data.Search[0])
    console.log(data.Search[0].Title)
    console.log(data)
}

function addMovies(){
    let searchTerm = (moviesSearchBox.value).trim();
    // console.log(searchTerm);
    // loadMovies(searchTerm)
}

function createMovie(e) {
    e.preventDefault()
    let movie = {
        'title': title.value
        // 'rating': rating.value
    }

    const url = 'https://materialistic-truthful-papaya.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    };
    fetch(url, options)
        .then(response => console.log(response))
        .then(movie)/* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */


    console.log(movie)
}

btn1.addEventListener("click", createMovie)



// Display movies from mock glitch database
 function displayMovie(movies){
    // return movies.this = movies[0].Poster
let movieItem = document.createElement('div')

movieItem.innerHTML =
 `
<div class="container mt-5" >
<div class="card-deck">
<div class="card">
<h5 class="card-title">${movies.Title}</h5>
    <div class="card-body">
        <img class="card-img-top" src="${movies.Poster}" class="img-fluid" alt="Card image cap">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <p class="card-text"><small class="text-muted"></small></p>
    </div>
</div>
</div>
</div>

`
searchList.appendChild(movieItem)
console.log(movies)

}











