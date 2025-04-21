<template>
  <div v-if="data" class="w-full">
    <h2 class="text-2xl font-semibold mb-6 text-center">{{ data.title }}</h2>
    <div class="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      <img
        v-for="(img, i) in data.images"
        :key="i"
        :src="img"
        @click="open(img)"
        class="w-full rounded shadow-md break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-105"
        alt="photo"
      />
    </div>

    <div v-if="preview" @click="preview = null"
         class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out">
      <img :src="preview" class="max-w-[90vw] max-h-[90vh] rounded shadow-lg border border-white" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ data: Object })

const preview = ref(null)
const open = (src) => { preview.value = src }
</script>
