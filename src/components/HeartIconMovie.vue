<template>
  <Heart fillColor="#FFFFFF" :size="40" :class="{'cursor-pointer' : clickable}" v-if="fill"  @click="heartMovie(movie)" />
  <HeartOutline fillColor="#FFFFFF" :size="40" :class="{'cursor-pointer' : clickable}" v-else  @click="heartMovie(movie)"/>
</template>

<script lang="ts" setup>
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import { useMovieStore } from '../stores/movie'
import { Movie } from '../../types';
import { PropType } from 'vue';
const useMovie = useMovieStore()

defineProps({
  fill: {
    type: Boolean,
    required: true,
    default: false
  },
  clickable:{
    type: Boolean,
    required: true,
    default: false
  },
  movie: {
    type: Object as PropType<Movie>,
    required: false,
    default: () => {}
  }
})

function heartMovie(movie: Movie) {
  useMovie.setHeartedMovies(movie)
}
</script>
