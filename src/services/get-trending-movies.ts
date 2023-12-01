import { Movie } from '../../types';
import { getMovieDetails } from './get-movie-details'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};


export function getTrendingMovies() {
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(data => {
      data.results.forEach((result: Movie) => {
        getMovieDetails(result.id, 'trending')
      })
    })
    .catch(err => console.error(err));
}


