<template>
   <div id="SideNav" class="sticky flex z-40 items-center md:w-[120px] w-8 h-screen top-10 left-0 bg-black ">
      <img class="fixed top-0 w-[35px] md:mt-10 md:ml-10" src="/images/frites.png" alt="">
      <div>
        <div class="md:py-2 md:mx-10 mx-2 my-6">
          <Magnify fillColor="#FFFFFF" :size="40" class="cursor-pointer" @click="useMovie.displaySearchBar(true)"/>
        </div>
        <div :class="['md:py-2 md:mx-10 mx-2 my-6', {'border-b-red-500  border-b-4' : $route.name === 'home'}]" @click="router.push({name:'home'})">
          <HomeOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer"/>
        </div>
        <div :class="['md:py-2 md:mx-10 mx-2 my-6', {'border-b-red-500  border-b-4' : $route.name === 'heart'}]" @click="router.push({name:'heart'})">
          <HeartOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer"/>
        </div>
        <div :class="['md:py-2 md:mx-10 mx-2 my-6', {'border-b-red-500  border-b-4' : $route.name === 'movieList'}]" @click="router.push({name:'movieList', params: {genre: '28'}})">
          <MovieOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer"/>
        </div>
      </div>
      <Footer class="mt-10 md:fixed md:w-[120px] md:bottom-0 hidden md:block"/>
    </div>
</template>

<script lang="ts" setup>
import Magnify from 'vue-material-design-icons/Magnify.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue';
import router from '../router';
import { useMovieStore } from '../stores/movie';
import Footer from './Footer.vue'
const useMovie = useMovieStore()
</script>