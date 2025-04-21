<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white px-4 py-10 flex flex-col items-center">
    
    <!-- NAVBAR SEMPRE VISIBILE -->
    <nav class="fixed top-0 left-0 w-full z-50 px-10 md:px-16 py-4 flex justify-between items-center text-white bg-black/30 backdrop-blur-md">
      <img src="/gallery/logo.png" alt="Logo" class="h-10 w-auto cursor-pointer" @click="goHome" />
      <div class="space-x-4">
        <a @click="goToChapter(0)" class="px-4 py-2 rounded-full border border-white text-white transition-all duration-300
                  hover:border-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500 hover:text-black cursor-pointer">
          Album
        </a>
        <a href="/about.html" class="px-4 py-2 rounded-full border border-white text-white transition-all duration-300
                  hover:border-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500 hover:text-black">
          About Me
        </a>
        <a href="/contact.html" class="px-4 py-2 rounded-full border border-white text-white transition-all duration-300
                  hover:border-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500 hover:text-black">
          Contact Me
        </a>
      </div>
    </nav>

    <transition name="page-flip" mode="out-in">
      <!-- HOME PAGE -->
      <div v-if="isHome" key="home" class="fixed inset-0 w-screen h-screen overflow-hidden">
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/gallery/1.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
        <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center space-y-6 px-6">
          <h1 class="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-slide-in">
            Il mio Album Fotografico
          </h1>
          <p class="text-zinc-200 text-lg max-w-2xl leading-relaxed">
            Un viaggio visivo tra luoghi, dettagli e atmosfere. Sfoglia le pagine e lasciati ispirare dai miei scatti personali.
          </p>
          <button @click="start" class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white transition">
            📖 Entra nell’album
          </button>
        </div>
      </div>

      <!-- PAGINE -->
      <div v-else-if="currentData" :key="pageIndex" class="w-full max-w-6xl mt-24">
        <!-- TEXT PAGE -->
        <div v-if="currentData.type === 'text'" class="relative w-full">
          <video
            v-if="currentData.video"
            autoplay
            muted
            loop
            playsinline
            class="absolute top-0 left-0 w-full h-full object-cover brightness-50 saturate-0 z-0"
          >
            <source :src="currentData.video" type="video/mp4" />
          </video>

          <div class="relative z-10 text-center max-w-3xl mx-auto px-6 py-20">
            <h1 class="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slide-in">
              {{ currentData.title }}
            </h1>
            <p class="text-lg text-zinc-300 leading-relaxed whitespace-pre-line mb-6">
              {{ currentData.content }}
            </p>
            <blockquote v-if="currentData.quote">
              {{ currentData.quote }}
            </blockquote>
            <button
              @click="goToChapter(1)"
              class="mt-10 px-6 py-3 text-white font-semibold rounded-full transition-all duration-500 ease-in-out
                    border border-white hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500
                    hover:shadow-lg hover:text-black fade-in"
              style="animation-delay: 1s"
            >
              Vai al Capitolo 1
            </button>
          </div>
        </div>

        <!-- GALLERY PAGE -->
        <div v-else-if="currentData.type === 'gallery'" class="w-full mt-16">
          <h2 class="text-5xl md:text-6xl font-extrabold mb-10 text-center text-white animate-title-pop drop-shadow-[0_3px_25px_rgba(255,255,255,0.3)]">
            {{ currentData.title }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(img, i) in currentData.images" :key="i" class="flip-card" @click="preview = img.src">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img :src="img.src" :alt="img.alt || 'photo'" class="image" />
                </div>
                <div class="flip-card-back">
                  <p class="text-zinc-100 text-center p-4">{{ img.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LOADING -->
      <div v-else class="text-zinc-500 animate-pulse">Caricamento...</div>
    </transition>

    <!-- LIGHTBOX -->
    <div v-if="preview" @click="preview = null" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out">
      <img :src="preview" class="max-w-[90vw] max-h-[90vh] rounded shadow-lg" />
    </div>

    <!-- NAVIGATION -->
    <div v-if="!isHome" class="mt-10 flex items-center space-x-6">
      <button @click="prevPage" :disabled="pageIndex <= 0" class="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-full disabled:opacity-30 transition">
        <span>⟨</span><span>Indietro</span>
      </button>
      <span class="text-sm text-zinc-400 tracking-wider uppercase">
        Pagina {{ pageIndex + 1 }} / {{ pages.length }}
      </span>
      <button @click="nextPage" :disabled="pageIndex >= pages.length - 1" class="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-full disabled:opacity-30 transition">
        <span>Avanti</span><span>⟩</span>
      </button>
    </div>

    <!-- BACK TO HOME CTA -->
    <div v-if="!isHome" class="mt-12 mb-6">
      <button
        @click="goHome"
        class="text-sm font-semibold uppercase px-5 py-2 rounded-full border border-zinc-500 text-zinc-300 bg-transparent
               hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500
               transition-all duration-500 ease-in-out hover:shadow-lg hover:brightness-110 animate-fade"
      >
        Torna alla Home
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'

const isIntro = computed(() => pageIndex.value === 0)
const pages = ref([])
const pageIndex = ref(0)
const isHome = ref(true)
const preview = ref(null)

const currentData = computed(() => pages.value[pageIndex.value])

const start = () => { isHome.value = false }
const goHome = () => {
  pageIndex.value = 0
  isHome.value = true
}
const nextPage = () => { if (pageIndex.value < pages.value.length - 1) pageIndex.value++ }
const prevPage = () => { if (pageIndex.value > 0) pageIndex.value-- }

onMounted(async () => {
  const chapters = await Promise.all([
    fetch("/chapter0.json").then(res => res.json()),
    fetch("/chapter1.json").then(res => res.json()),
    fetch("/chapter2.json").then(res => res.json()),
    fetch("/chapter3.json").then(res => res.json()),
    fetch("/chapter4.json").then(res => res.json()),
    fetch("/chapter5.json").then(res => res.json()),
    fetch("/chapter6.json").then(res => res.json()),
    fetch("/chapter7.json").then(res => res.json()),
    fetch("/chapter8.json").then(res => res.json())
  ])
  pages.value = chapters
})
const goToChapter = (index) => {
  if (index >= 0 && index < pages.value.length) {
    pageIndex.value = index
  }
}
  // 🔍 Se l'URL contiene "#album", parti direttamente da chapter0
  if (window.location.hash === "#album") {
    isHome.value = false
    pageIndex.value = 0
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

@keyframes title-pop {
  0% { opacity: 0; transform: scale(0.85) translateY(40px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in {
  animation: fade-in 0.8s ease-out both;
}

.animate-title-pop {
  animation: title-pop 0.8s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

/* Flip Card */
.flip-card {
  perspective: 1000px;
  cursor: zoom-in;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  transform-style: preserve-3d;
  transition: transform 0.8s;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(-180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
  overflow: hidden;
  top: 0;
  left: 0;
}

.flip-card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.flip-card-back {
  background: rgba(20, 20, 20, 0.95);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

blockquote {
  font-style: italic;
  color: #d1d5db;
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
