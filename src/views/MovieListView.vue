<template>
  <div class="p-6">
    <Tabs />
    <div class="md:grid grid-cols-4 gap-4">
      <MovieCardLoader v-if="loaderMovie" v-for="x in 8" :key="x" />
      <MovieCard
        v-else
        :movie="oneMovie"
        v-for="(oneMovie, index) in movies"
        :key="index"
      />
      <Pagination :current-page="pageAsked" :total-pages="totalPages"></Pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch , computed} from 'vue'
import Tabs from '../components/Tabs.vue'
import Pagination from '../components/Pagination.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieCardLoader from '../components/MovieCardLoader.vue'
import { getMoviesByGenre } from '../services/get-movies-by-genre'
import { storeToRefs } from 'pinia'
import { useMovieStore } from '../stores/movie'
import { useRoute } from 'vue-router'
const route = useRoute()
const useMovie = useMovieStore()
const { movies, loaderMovie, totalPages } = storeToRefs(useMovie)

const pageAsked = computed(()=> Number(route.query.page) || 1)

onMounted(() => {
  getMoviesByGenre({genre:Number(route.params.genre), page:pageAsked.value} || {genre:28, page: 1})
})

watch(route, () => {
  getMoviesByGenre({genre:Number(route.params.genre), page:pageAsked.value})
})
</script>
