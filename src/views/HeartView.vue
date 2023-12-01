

<template>
  <div class="p-6">
    <div
        class="font-semibold text-white text-2xl cursor-pointer mb-4"
      >
       Favorite movies
      </div>
    <div class="md:grid grid-cols-4 gap-4"  v-if="heartedMovies.length">
      <MovieCard  v-for="(oneMovie, index) in heartedMovies" :movie="oneMovie" :key="index"/>
    </div>
    <div v-else class="text-white text-2xl">
     <p> You don't have any movie to your list. </p>
      <button class="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-green-700 rounded" 
      @click="router.push({name:'movieList', params: {genre: '28'}})"
      > Add some !</button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useMovieStore } from '../stores/movie'
import { storeToRefs } from 'pinia';
import MovieCard from '../components/MovieCard.vue'
import router from '../router';


const useMovie = useMovieStore()
const { heartedMovies } = storeToRefs(useMovie)
</script>