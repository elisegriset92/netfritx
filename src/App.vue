<template>
  <div class="bg-black md:h-full">
    <div  v-if="showSearchBar || showFullVideo">
      <SearchBar v-if="showSearchBar"/>
      <FullScreenVideo v-if="showFullVideo" :video="videoOnFullScreen" />
    </div>
    <div class="flex" v-else>
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import FullScreenVideo from './components/FullScreenVideo.vue'
import SearchBar from './components/SearchBar.vue'
import { storeToRefs } from 'pinia'
import { useMovieStore } from './stores/movie'
const useMovie = useMovieStore()
const { videoOnFullScreen, showFullVideo, showSearchBar } = storeToRefs(useMovie)

</script>
