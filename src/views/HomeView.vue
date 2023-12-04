<template>
  <div
    v-if="movie.title"
    class="fixed text-white flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border"
  >
    <div
      class="absolute z-30 h-[600px] md:left-[120px] md:w-[77%] w-[100%] right-0 top-0 bg-gradient-to-r from-black via-black"
    />
    <MovieDetails :movie="movie" />
    <img
      :src="'https://image.tmdb.org/t/p/original/' + movie?.poster_path"
      class="absolute z-0 h-[600px] right-0 top-0"
    />
  </div>
  <MovieDetailsLoader v-else />
  <div
    class="absolute z-20 h-[70%] w-[100%] bottom-0 bg-gradient-to-t from-black via-black"
  />
  <div class="fixed z-30 bottom-0 right-0 w-full pl-[120px] md:overflow-y-auto">
    <VideoCarousel category="Popular Movies" :movies="trendingMovies" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import VideoCarousel from '../components/VideoCarousel.vue'
import MovieDetails from '../components/MovieDetails.vue'
import MovieDetailsLoader from '../components/MovieDetailsLoader.vue'
import { useMovieStore } from '../stores/movie'
import { storeToRefs } from 'pinia'
import { getTrendingMovies } from '../services/get-trending-movies'
import { Movie } from '../../types'

const useMovie = useMovieStore()
const { trendingMovies } = storeToRefs(useMovie)

let movie = ref(null || ({} as Movie))
let index = ref(0)

function updateMovie() {
  index.value += 1
  if (index.value > 12) {
    index.value = 0
  }
  movie.value = trendingMovies.value[index.value]
}

onMounted(() => {
  getTrendingMovies()
  setInterval(updateMovie, 3000)
})
</script>
