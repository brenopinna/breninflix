const moviePages = 3;
const moviesList = [];

for(let page = 1; page <= moviePages; page++){
   const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR&page=${page}`);
   const data = await response.json();
   const movies = data.results;
   movies.map(movie => {
      moviesList.push(movie);
   })
}

export const detailedMovies = [];
for(let movie of moviesList){
   const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR`);
   const detailedMovie = await response.json();
   const movieDetails = {
      'id': detailedMovie.id,
      'title': detailedMovie.title,
      'overview': detailedMovie.overview,
      'genres': detailedMovie.genres.map(genre => genre.name),
      'release_date': detailedMovie.release_date,
      'background': `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      'poster': `https://image.tmdb.org/t/p/original${movie.poster_path}`
   }
   detailedMovies.push(movieDetails)
}