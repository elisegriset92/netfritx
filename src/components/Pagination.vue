<template>
  <div
    class="flex items-center justify-between bg-black text-white py-3"
  >
      <div class="flex">
        <a @click="$router.push({ query: { page: currentPage - 1 } })">
          <ChevronLeft class="cursor-pointer" fillColor="#FFFFFF" :size="40" />
        </a>
        <a
          @click="$router.push({ query: { page: currentPage } })"
          class="text-sm font-semibold text-white mt-2"
          >{{ currentPage }} / {{ totalPages }}
        </a>

        <a @click="$router.push({ query: { page: currentPage + 1 } })">
          <ChevronRight class="cursor-pointer"  fillColor="#FFFFFF" :size="40" />
        </a>
      </div>
    </div>
</template>

<script setup lang="ts">
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
defineProps({
  totalPages: {
    type: Number,
    required: true,
    default: 1
  },
  currentPage: {
    type: Number,
    required: true,
    default: 1
  }
})
</script>
