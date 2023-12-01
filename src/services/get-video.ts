import { useMovieStore } from '../stores/movie'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};


export  function getVideo(id:number) {
  const useMovie = useMovieStore();
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(data =>  {
    useMovie.setFullVideo(data.results)
  })
  .catch(err => console.error(err));
}


