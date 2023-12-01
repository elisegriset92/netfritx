<template>
  <div
    class="absolute z-30 bg-black h-full w-full cursor-pointer"
  >
  <div
    class="absolute z-30 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer"
  >
    <ChevronLeft
      fillColor="#FFFFFF"
      :size="40"
      @click="useMovie.displaySearchBar(false)"
    />
    </div>
    <div class="text-white flex mt-[15%] px-6">

      <Magnify fillColor="#FFFFFF" :size="80" class="cursor-pointer"/>
      <input class="w-full text-white bg-black text-2xl rounded border-2 border-white py-2 px-3 focus:outline-none" type="text" 
      v-model="search" placeholder="Search a movie">
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import { useMovieStore } from '../stores/movie'
import Magnify from 'vue-material-design-icons/Magnify.vue';
import { ref, watch } from 'vue';
import { getMovieBySearch } from '../services/get-movie-by-search'
import debounce from 'lodash.debounce'
const useMovie = useMovieStore()

let search = ref('')



const debounceAndSearch = debounce(() => {
  getMovieBySearch(search.value)
}, 1000)

watch(search, () => {
  debounceAndSearch();
})
</script>
