<template>
  <div class="md:flex text-white cursor-pointer">
    <div
      :class="[
        'md:px-2 md:my-10 md:mx-6',
        { 'border-b-red-500  border-b-4': $route.params.genre == '28' }
      ]"
      @click="chose('28')"
    >
      ACTION
    </div>

    <div
      :class="[
        'md:px-2 md:my-10 md:mx-6',
        { 'border-b-red-500  border-b-4': $route.params.genre == '16' }
      ]"
      @click="chose('16')"
    >
      ANIMATION
    </div>

    <div
      :class="[
        'md:px-2 md:my-10 md:mx-6',
        { 'border-b-red-500  border-b-4': $route.params.genre == '12' }
      ]"
      @click="chose('12')"
    >
      ADVENTURE
    </div>

    <div
      :class="[
        'md:px-2 md:my-10 md:mx-6',
        { 'border-b-red-500  border-b-4': $route.params.genre == '35' }
      ]"
      @click="chose('35')"
    >
      COMEDY
    </div>

    <div
      :class="[
        'md:px-2 md:my-10 md:mx-6',
        {
          'border-b-red-500  border-b-4': $route.params.genre == '99'
        }
      ]"
      @click="chose('99')"
    >
      DOCUMENTARY
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '../router'

function chose(arg: string) {
  router.push({
    params: {
      genre: arg
    }
  })
}
</script>
