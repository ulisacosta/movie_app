const URL_IMG = 'https://image.tmdb.org/t/p/w1280'
const main = document.querySelector("main");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2VjYzBhZTJjYzk2NjFiNTcwZDIxYmUyMDllZGMzYyIsInN1YiI6IjY1MzE4ZmViNmY4ZDk1MDBjOTI4NDNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvy1GyCxtI41oOWQyEjtAnvJItJau8QI84MNFYV52Tc",
  },
};


async function getMovies() {
  await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
    )
    .then((response) => response.json())
    .then((response) => {
    console.log(response)
    showMovies(response.results);
    })
    .catch((err) => console.error(err));
  }
  getMovies();
  
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("card");
    
    movieEl.innerHTML = `
    <div class="flex flex-col">
    <img src="${URL_IMG + poster_path}">
    <div class="flex flex-col justify-center">
    <h2 class="title">${title}</h2>    
    <h2 class="vote">${vote_average}</h2>    
    </div>
    </div>
`;

    main.appendChild(movieEl);
  });
}

