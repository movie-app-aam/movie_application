// Loading screen


const url = 'https://brassy-bronze-fender.glitch.me/movies'
let title = document.getElementById('addMovie')
let rating = document.getElementById('addRating')
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", createMovie)


    fetch(url)
        .then(function (res) {
            console.log(res)
            return res.json();
        }).then(function (data) {
            console.log(data)
        $("#loading-image").addClass('hide')
        console.log(data)

        const htmlText = data.map(function (o) {
            return `

    <div>${loadMovies(o.title)}</div>


`;



        })

        $('#movies').append(htmlText)

        // loadMovies(data[0].title)




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
    console.log(data);
    if (data.Response === "True") displayMovieList(data.Search)
}

function findMovies(){
    let searchTerm = (moviesSearchBox.value).trim();
    // console.log(searchTerm);
    // loadMovies(searchTerm)
}

function displayMovieList(movies){
searchList.innerHTML = "";
for(let idx = 0; idx < 1; idx++){
    let movieListItem = document.createElement('div');
    // console.log(movieListItem)
    movieListItem.dataset.id = movies[idx].imdbID;
    movieListItem.classList.add('search-list-item');
    if(movies[idx].Poster !== "N/A" )
        moviePoster = movies[idx].Poster;
        else
            moviePoster ="image_not_found";

        movieListItem.innerHTML = `
    <div calss="result-container">
        <h4 style="text-align: center">${movies[idx].Title}</h4>
        <div class = "result-grid" id = "result-grid">
<!--   movie info here    -->
            <div class="movie-poster">
                <img src ="${moviePoster}">
            </div>

        </div>
    </div>
        `;
        searchList.appendChild(movieListItem)
}

}


//     <img src ="${moviePoster}">

function createMovie(e) {
    e.preventDefault()
    let movie = {
        'title': title.value,
        'rating': rating.value
    }

    const url = 'https://brassy-bronze-fender.glitch.me/movies';
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


// <div className="card">
//     <div className="card-header">Title: ${o.title}</div>
//     <div className="card-body"><img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_s11214cj0Z8H_o9SkPsIArI8tsF4SIQZg&usqp=CAU"></div>
//     <div className="card-footer">Rating: ${o.rating}</div>
//     <div className="card-footer">ID: ${o.id}</div>
//
//
//     <form>
//         <button className="delete" value=${o.id}>Delete</button>
//     </form>
// </div>
//
// <br>











