<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white px-4 py-10 flex flex-col items-center">
  <!-- Navbar in alto -->
<div class="absolute top-0 left-0 w-full z-30 px-6 py-6 flex justify-between items-center">
  <router-link to="/" class="cursor-pointer">
    <img src="/gallery/logo.png" alt="Logo" class="h-10" />
  </router-link>

  <div class="flex space-x-4">
    <a
      href="/about.html"
      class="border border-white px-4 py-2 rounded-full text-white transition hover:font-semibold hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500 hover:border-transparent"
    >
      About Me
    </a>

    <a
      href="/contact.html"
      class="border border-white px-4 py-2 rounded-full text-white transition hover:font-semibold hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500 hover:border-transparent"
    >
      Contact Me
    </a>
  </div>
</div>

    <!-- ✅ TRANSITION -->
    <transition name="page-flip" mode="out-in">
      <!-- ✅ HOME -->
      <div v-if="isHome" key="home" class="fixed inset-0 w-screen h-screen overflow-hidden">
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/gallery/1.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
        <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center space-y-6 px-6">
        <img src="/gallery/logoAP.png" alt="Logo" class="h-10 w-auto animate-slide-in" />
        <h1 class="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-slide-in">
          Andrea Piscioneri
        </h1>
          <p class="text-zinc-200 text-lg max-w-2xl leading-relaxed">
            Un viaggio visivo tra luoghi, dettagli e atmosfere. Sfoglia le pagine e lasciati ispirare dai miei scatti personali.
          </p>
          <button @click="start" class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white transition">
            📖 Entra nell’album
          </button>
        </div>
      </div>

      <!-- ✅ PAGINE -->
      <div v-else-if="currentData" :key="pageIndex" class="w-full max-w-6xl mt-24">
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

        <div v-else-if="currentData.type === 'gallery'" class="w-full mt-16">
          <h2 class="text-5xl md:text-6xl font-extrabold mb-10 text-center text-white animate-title-pop drop-shadow-[0_3px_25px_rgba(255,255,255,0.3)]">
            {{ currentData.title }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(img, i) in currentData.images"
              :key="i"
              class="flip-card"
              :class="{ flipped: flippedCards[i] }"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front" @click="preview = img.src">
                  <img :src="img.src" :alt="img.alt || 'photo'" class="image" />
                </div>
                <div class="flip-card-back" @click="preview = img.src">
                  <p class="text-zinc-100 text-center p-4">{{ img.description }}</p>
                </div>
              </div>
              <button
                class="mt-2 text-xs bg-zinc-700 px-3 py-1 rounded-full block"
                @click.stop="toggleFlip(i)"
              >
                Description
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-zinc-500 animate-pulse mt-32">Caricamento...</div>
    </transition>

    <!-- ✅ LIGHTBOX -->
    <div v-if="preview" @click="preview = null" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-zoom-out">
      <img :src="preview" class="max-w-[90vw] max-h-[90vh] rounded shadow-lg" />
    </div>

    <!-- ✅ NAVIGAZIONE -->
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

    <!-- ✅ CTA -->
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

const isHome = ref(true)
const pages = ref([])
const pageIndex = ref(0)
const preview = ref(null)
const showMenu = ref(false)
const isWideScreen = ref(window.innerWidth >= 768)
const flippedCards = ref([])

const currentData = computed(() => pages.value[pageIndex.value])

const activeLink = computed(() => {
  if (isHome.value) return 'home'
  if (pageIndex.value === 0) return 'album'
  return `chapter${pageIndex.value}`
})

const start = () => { isHome.value = false }
const goHome = () => {
  pageIndex.value = 0
  isHome.value = true
  closeMenu()
}
const nextPage = () => { if (pageIndex.value < pages.value.length - 1) pageIndex.value++ }
const prevPage = () => { if (pageIndex.value > 0) pageIndex.value-- }

const toggleMenu = () => { showMenu.value = !showMenu.value }
const closeMenu = () => { showMenu.value = false }

const goToChapter = (index) => {
  if (index >= 0 && index < pages.value.length) {
    pageIndex.value = index
    isHome.value = false
    closeMenu()
  }
}

const navLinkClass = (isActive) => [
  'block md:inline px-4 py-2 rounded-full border transition-all duration-300',
  isActive
    ? 'bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 text-white border-transparent'
    : 'border-white text-white hover:border-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-indigo-500 hover:to-purple-500 hover:text-black'
]

const toggleFlip = (index) => {
  flippedCards.value[index] = !flippedCards.value[index]
}

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
  flippedCards.value = Array(chapters[0]?.images?.length || 0).fill(false)

  if (window.location.hash === "#album") {
    isHome.value = false
    pageIndex.value = 0
  }

  window.addEventListener('resize', () => {
    isWideScreen.value = window.innerWidth >= 768
  })
})
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
.animate-title-pop {
  animation: title-pop 0.8s ease-out;
}
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade, .fade-in {
  animation: fade-in 0.8s ease-out both;
}
.fade-menu-enter-active, .fade-menu-leave-active {
  transition: opacity 0.3s ease;
}
.fade-menu-enter-from, .fade-menu-leave-to {
  opacity: 0;
}

.flip-card {
  perspective: 1000px;
  cursor: default;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  transform-style: preserve-3d;
  transition: transform 0.8s;
}
.flip-card.flipped .flip-card-inner {
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
  cursor: zoom-in;
}
.flip-card-back {
  background: rgba(20, 20, 20, 0.95);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  cursor: zoom-in;
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
