import { useMovieStore } from '../stores/movie'
import router from '../router';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};


export  function getMovieBySearch(query: string) {
  const useMovie = useMovieStore();
  useMovie.displaySearchBar(false)
  useMovie.setLoader(true)
  fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(data =>  {
      useMovie.setMovieDetails(data.results[0]);
      router.push({name: 'movieDetails', params:{id : data.results[0].id}})
      useMovie.setLoader(false)
  })
  .catch(err => console.error(err));
}


