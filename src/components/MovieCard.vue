<template>
  <div class="w-80 h-96 relative border-2 border-neutral-600 rounded">
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      :style="{
        'background-image':
          'url(https://image.tmdb.org/t/p/original/' + movie?.poster_path + ')'
      }"
    >
      <div class="p-2">
        <HeartIconMovie :movie="movie" :clickable="false" :fill="isFilled" />
      </div>
    </div>
    <div
      class="opacity-0 hover:opacity-100 hover:bg-black duration-300 absolute inset-0 z-10 flex justify-center items-center"
    >
      <div class="p-6 text-ellipsis overflow-hidden h-[80%]">
        <HeartIconMovie :movie="movie" :clickable="true" :fill="isFilled" />
        <h5 class="my-2 text-xl text-white">
          {{ movie.title }}
        </h5>
        <p
          class="mb-4 text-base text-neutral-600 cursor-pointer"
          @click="
            $router.push({
              name: 'movieDetails',
              params: { id: Number(movie.id) }
            })
          "
        >
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { Movie } from '../../types'
import { useMovieStore } from '../stores/movie'
import { storeToRefs } from 'pinia'
import HeartIconMovie from './HeartIconMovie.vue'
const useMovie = useMovieStore()
const { heartedMovies } = storeToRefs(useMovie)

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: false,
    default: () => {}
  }
})

const isFilled = computed(() => {
  if (
    heartedMovies.value.length &&
    heartedMovies.value.find((heartedMovie: Movie) => heartedMovie.id === Number(props.movie.id))
  ) {
    return true
  }
  return false
})
</script>
