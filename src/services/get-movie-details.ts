import { useMovieStore } from '../stores/movie'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};


export  function getMovieDetails(id:number, which: string) {
  const useMovie = useMovieStore();
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(response => response.json())
  .then(data =>  {
    if (which=== 'trending') {
      useMovie.setHomePageMovies(data)
    } else if (which === 'details') {
      useMovie.setMovieDetails(data)
    }
  })
  .catch(err => console.error(err));
}


