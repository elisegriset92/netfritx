import { useMovieStore } from '../stores/movie'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};

declare type Arg = {
  genre: Number,
  page: Number
}

export  function getMoviesByGenre(arg : Arg) {
  const useMovie = useMovieStore();
  useMovie.setLoader(true)
  fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${arg.genre}&page=${arg.page}&language=en-US`, options)
  .then(response => response.json())
  .then(data =>  {
    useMovie.setMovies(data.results)
    useMovie.setTotalPages(data.total_pages)
    useMovie.setLoader(false)
  })
  .catch(err => console.error(err));
}


