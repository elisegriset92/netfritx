<template>
  <div v-if="!showFullVideo">
    <div
      class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border"
    >
      <div
        class="absolute z-30 h-[600px] md:left-[120px] md:w-[77%] w-[100%] right-0 top-0 bg-gradient-to-r from-black via-black"
      />
      <MovieDetails v-if="movieDetails" :movie="movieDetails" />
      <img
        v-if="movieDetails"
        :src="'https://image.tmdb.org/t/p/original/' + movieDetails?.poster_path"
        class="absolute z-0 h-[600px] right-0 top-0"
      />
    </div>
   
  </div>
  <FullScreenVideo
    v-if="showFullVideo"
    @videoFullScreen="showFullVideo = $event"
    :video="videoOnFullScreen"
  />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import MovieDetails from '../components/MovieDetails.vue'
import FullScreenVideo from '../components/FullScreenVideo.vue'
import { useMovieStore } from '../stores/movie'
import { storeToRefs } from 'pinia'
import { getMovieDetails } from '../services/get-movie-details'
import { useRoute } from 'vue-router';
const route = useRoute();
const useMovie = useMovieStore()
const { movieDetails, videoOnFullScreen, showFullVideo } = storeToRefs(useMovie)

onMounted(() => {
  getMovieDetails(Number(route.params.id), 'details')
})
</script>
