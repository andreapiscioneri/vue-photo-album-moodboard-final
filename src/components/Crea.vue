<template>
  <div class="min-h-screen bg-[#121212] text-white px-6 py-10">
    <h1 class="text-4xl font-bold mb-8 text-center">📸 Crea il tuo Album Fotografico</h1>

    <!-- Upload -->
    <div class="text-center mb-10">
      <input
        type="file"
        multiple
        accept="image/*"
        @change="handleUpload"
        class="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
      />
    </div>

    <!-- Griglia Immagini -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
      >
        <img
          :src="image.src"
          alt="Uploaded"
          class="w-full h-64 object-cover"
        />
        <div class="p-4 space-y-2 flex-1 flex flex-col justify-between">
          <textarea
            v-model="image.description"
            placeholder="Scrivi una descrizione..."
            class="w-full p-2 bg-zinc-800 text-white rounded resize-none placeholder-zinc-400"
          ></textarea>

          <button
            @click="removeImage(index)"
            class="mt-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded"
          >
            🗑 Rimuovi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([])

const handleUpload = (e) => {
  const files = e.target.files
  for (const file of files) {
    const reader = new FileReader()
    reader.onload = (event) => {
      images.value.push({
        src: event.target.result,
        description: ''
      })
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (index) => {
  images.value.splice(index, 1)
}
</script>

<style scoped>
textarea {
  min-height: 80px;
}
</style>
