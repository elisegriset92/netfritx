<template>
  <div
    class="absolute z-30 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer"
  >
    <ChevronLeft
      fillColor="#FFFFFF"
      :size="40"
      @click="useMovie.displayFullVideo(false)"
    />
  </div>
  <iframe
    :src="video"
    autoplay
    loop
    controls
    class="absolute z-0 w-[100vw] h-full object-fit"
  />
</template>

<script lang="ts" setup>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import { useMovieStore } from '../stores/movie'
const useMovie = useMovieStore()
defineProps({
  video: {
    type: String,
    required: false,
    default: ''
  }
})

</script>
