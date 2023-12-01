<template>
  <div class="z-40 text-white w-[53%] pt-20">
    <div class="text-[40px] font-semibold font-serif">{{ movie.title }}</div>
    <div class="flex items-center text-lg pt-4">
      <div>{{ movie.release_date }}</div>
      <div
        class="relative"
        v-for="(oneGenre, index) in movie.genres"
        :key="index"
      >
        <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
        <span class="pl-4">{{ oneGenre.name }}</span>
      </div>
    </div>
    <div class="text-sm pt-6">{{ movie.overview }}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Movie } from '../../types'
defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: false,
    default: () => {}
  }
})
</script>
