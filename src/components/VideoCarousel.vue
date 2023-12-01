<template>
  <div class="min-w-[1200px] relative">
    <div class="flex justify-between mr-6">
      <div
        class="font-semibold text-white text-2xl cursor-pointer mb-4"
      >
        {{ category }}
      </div>
    </div>

    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="8"
      :items-to-scroll="1"
      :wrap-around="true"
      :transition="500"
      snapAlign="start"
      class="bg-transparent"
    >
      <Slide
        v-for="(slide, index) in movies"
        :key="index"
        class="flex items-center object-cover text-white bg-transparent"
      >
        <div
          @click="fullScreenVideo(index, Number(slide.id))"
          class="object-cover h-[100%] hover:brightness-125 cursor-pointer border-4 border-transparent"
        >
          <img
            style="user-select: none"
            class="pointer-events-none h-[100%] z-[-1]"
            :src="'https://image.tmdb.org/t/p/original/' + slide?.poster_path"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation class="hidden md:block" />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useMovieStore } from '../stores/movie'
import { getVideo } from '../services/get-video'
import { Movie } from '../../types'

const useMovie = useMovieStore()

let currentSlide = ref(0)

const props = defineProps({
  category: {
    type: String
  },
  movies: {
    type: Array as PropType<Movie[]>
  }
})
const { movies, category } = toRefs(props)

const emits = defineEmits(['videoFullScreen'])

const fullScreenVideo = (index: number, slideId: number) => {
  currentSlide.value = index
  getVideo(slideId)
  useMovie.displayFullVideo(true)
}

</script>

<style>
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
  color: white;
}
</style>
