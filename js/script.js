import { detailedMovies } from './api.js';

function addMainMovie(){
   const mainMovie = returnRandomElement(detailedMovies);

   const movieTitle = document.getElementById('title');
   const movieDescription = document.getElementById('description');
   const movieContainer = document.getElementById('destaque');

   movieTitle.innerText = mainMovie.title;
   movieDescription.innerText = mainMovie.overview;
   movieContainer.style.backgroundImage = `url('${mainMovie.background}')`;
}

function returnCategorizedMovies(genreNumber){
   const genreList = returnAllGenres(detailedMovies);

   const numberOfGenres = genreNumber;
   const randomGenres = returnSomeGenres(genreList, numberOfGenres);

   const categorizedMovies = [];
   for(let genre of randomGenres){
      let filteredByGenreMovies = filterFilmsByGenre(detailedMovies, genre);
      let moviesObject = {
         'genre': genre,
         'movies': filteredByGenreMovies
      }
      categorizedMovies.push(moviesObject);
   }
   return categorizedMovies;
}

function renderMovies(){
   const sectionFilmes = document.querySelector('#filmes .container');
   
   categorizedMovies.map(category => {
      const nav = document.createElement('nav');
      nav.classList.add('filmes-container');
      
      const h2 = document.createElement('h2');
      h2.innerText = category.genre;

      const ul = document.createElement('ul');
      ul.classList.add('filmes-list');
      category.movies.map(movie => {
         const li = document.createElement('li');
         const img = document.createElement('img');
         img.src = movie.poster;
         li.appendChild(img);
         ul.appendChild(li)
      })
      nav.appendChild(h2)
      nav.appendChild(ul)
      sectionFilmes.appendChild(nav)
   })
}

addMainMovie();
const categorizedMovies = returnCategorizedMovies(6);
renderMovies(categorizedMovies);

//revisada e correta
function returnRandomElement(array){
   const index = Math.floor(Math.random() * array.length);
   const randomElement = array[index];
   return randomElement;
}

//revisada e correta
function returnAllGenres(movies){
   const genreList = [];
   for(let movie of movies){
      movie.genres.map(genre => {
         if(!genreList.includes(genre)){
            genreList.push(genre);
         }
      })
   }
   return genreList;
}

function returnSomeGenres(genresArray, numberOfGenres){
   const genreList = [];
   while(genreList.length < numberOfGenres){
      const randomGenre = returnRandomElement(genresArray);
      if(!genreList.includes(randomGenre)){
         genreList.push(randomGenre);
      }
   }
   return genreList;
}

function filterFilmsByGenre(movies, genre){
   const filteredMovies = [];
   movies.map(movie => {
      if(movie.genres.includes(genre)){
         filteredMovies.push(movie);
      }
   })
   return filteredMovies
}

/* 
HTML dos filmes, para estilização manter a estrutura (OBS: isso dentro da sectionFilmes)

<nav class="filmes-container">
   <h2>Filmes</h2>
   <ul class="filmes-list">
      <li>
         <img src="(poster)"></img>
      </li>
   </ul>
</nav>
*/

//bagulhinho de ler mais
// const overviewWords = movie.overview.split(' ');
// if(overviewWords.length > 50){
//    const mostrado = overviewWords.slice(0, 60);
//    const ocultado = overviewWords.slice(60);

//    const readMore = document.createElement('span');

//    readMore.id = 'ler-mais';
//    readMore.innerText = ' Ler mais...'

//    movieDescription.innerHTML = mostrado.join(' ') + '...';
//    movieDescription.appendChild(readMore);

//    readMore.addEventListener('click', () => {
   //       if(!readMore.classList.contains('expanded')){
//          readMore.classList.add('expanded');

//          movieDescription.innerHTML = mostrado.join(' ') + ' ' + ocultado.join(' ');
//          readMore.innerText = ' Ler menos...'
//          movieDescription.appendChild(readMore);
//       }else{
   //          readMore.classList.remove('expanded');
   
   //          movieDescription.innerHTML = mostrado.join(' ');
   //          readMore.innerText = ' Ler mais...'
   //          movieDescription.appendChild(readMore);
   //       }
   //    })
   // }
   
//filme aleátorio