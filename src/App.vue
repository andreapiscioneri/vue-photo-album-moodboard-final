<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white px-4 py-10 flex flex-col items-center space-y-20">
    <!-- ✅ HERO -->
    <section class="text-center space-y-6 max-w-3xl">
      <h1 class="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-slide-in">
        Il tuo Viaggio Fotografico Inizia Qui
      </h1>
      <p class="text-zinc-200 text-lg leading-relaxed">
        Esplora, crea e condividi il tuo album personale. Ispirato dal lavoro di Andrea Piscioneri, ogni scatto racconta una storia.
      </p>
      <button @click="scrollToSection('create')" class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white transition">
        🎞️ Crea il tuo Album
      </button>
    </section>

    <!-- ✅ SEZIONE FOTOGRAFO -->
    <section class="w-full max-w-4xl text-center space-y-6" id="andrea">
    <router-link to="/andrea" class="text-indigo-400 hover:underline text-xl">
      📸 Andrea Piscioneri
    </router-link>
      <p class="text-zinc-400 text-lg leading-relaxed">
        Fotografo documentarista italiano, Andrea cattura l’essenza di luoghi, volti e storie con uno stile intimista e cinematografico.
        Il suo lavoro ispira chiunque voglia raccontarsi attraverso l'obiettivo.
      </p>
      <img src="/public/gallery/1.mp4" alt="Andrea Piscioneri" class="w-40 h-40 mx-auto rounded-full object-cover border-4 border-indigo-500 shadow-lg">
    </section>

    <!-- ✅ CREA IL TUO ALBUM -->
    <section class="w-full max-w-5xl" id="create">
      <h2 class="text-4xl font-bold text-center mb-8 text-white">✨ Crea il tuo Album Fotografico</h2>
      <div class="bg-zinc-800 p-6 rounded-xl shadow-lg space-y-6">
        <input
          type="file"
          accept="image/*"
          multiple
          @change="handleUpload"
          class="block w-full text-sm text-zinc-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
        />
        <div v-if="userImages.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div v-for="(img, index) in userImages" :key="index" class="relative group">
            <img :src="img" alt="preview" class="rounded-lg object-cover w-full h-40 shadow-md">
            <button
              class="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition"
              @click="removeImage(index)"
            >
              ✕
            </button>
          </div>
        </div>
        <div v-else class="text-center text-zinc-400">
          Nessuna immagine caricata. Aggiungi alcune foto per iniziare.
        </div>
      </div>
    </section>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

const userImages = ref([])

const handleUpload = (e) => {
  const files = e.target.files
  for (const file of files) {
    const reader = new FileReader()
    reader.onload = (event) => {
      userImages.value.push(event.target.result)
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (index) => {
  userImages.value.splice(index, 1)
}

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes slide-in {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-slide-in {
  animation: slide-in 0.8s ease-out;
}
</style>
