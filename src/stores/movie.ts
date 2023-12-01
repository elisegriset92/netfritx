import { defineStore } from 'pinia'
import { Movie } from '../../types/index'
import {ref} from 'vue'
export const useMovieStore = defineStore('movie', () => {

  const movieDetails= ref(null) as unknown as Movie | null;
  const movie = ref(null) as unknown as Movie | null;
  const videoOnFullScreen = ref('');
  const showFullVideo = ref(false) as unknown as boolean;
  const trendingMovies = ref([]) as unknown as Movie[];
  const movies = ref([]) as unknown as Movie[];
  const heartedMovies = ref([]) as unknown as Movie[];;
  const loaderMovie = ref(true) as unknown as boolean;;
  const showSearchBar = ref(false) as unknown as boolean;;
  const totalPages = ref(0) as unknown as number;

  function setMovies(movies: Movie[]) {
    this.movies = movies
  };
  function setTotalPages(total: Number) {
    this.totalPages = total
  };
  function setHomePageMovies(movie: Movie) {
    this.trendingMovies.push(movie)
  };
  function setMovieDetails(movie: Movie) {
    this.movieDetails = movie;
  };
  function setLoader(load: boolean) {
    this.loaderMovie = load
  };
  function setFullVideo(arg: any) {
    this.videoOnFullScreen = 'https://www.youtube.com/embed/' + arg[0].key
  };
  function displayFullVideo(arg: boolean) {
    this.showFullVideo = arg
  };
  function displaySearchBar(arg: boolean) {
    this.showSearchBar = arg
  };
  function setHeartedMovies(movie: Movie) {
    const indexOfMovie = this.heartedMovies.findIndex((heartMovie: Movie) => heartMovie.id === movie.id)
    if (indexOfMovie === -1) {
      this.heartedMovies.push(movie);
    } else {
      this.heartedMovies.splice(indexOfMovie, 1)
    }
  };

  return {
    movieDetails,
    movie,
    videoOnFullScreen,
    showFullVideo,
    trendingMovies,
    movies,
    heartedMovies,
    loaderMovie,
    showSearchBar,
    setMovies,
    totalPages,
    setTotalPages,
    setHomePageMovies,
    setMovieDetails,
    setLoader,
    setFullVideo,
    displayFullVideo,
    displaySearchBar, 
    setHeartedMovies,
  }
})