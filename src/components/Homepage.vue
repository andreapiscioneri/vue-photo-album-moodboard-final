<template>
  <!-- ✅ HERO COVER FULLSCREEN - centrata -->
<section class="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center">
  <!-- Sfondo video -->
  <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale">
    <source src="/gallery/def.mp4" type="video/mp4" />
  </video>

  <!-- Overlay nero -->
  <div class="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

  <!-- Contenuto centrale -->
  <div class="relative z-20 flex flex-col items-center justify-center px-6 space-y-6 max-w-3xl">
    <h1 class="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
      Inizia il tuo Viaggio fotografico
    </h1>
    <p class="text-white text-lg leading-relaxed">
      Esplora, crea e condividi il tuo album personale. Ispirato dal lavoro di Andrea Piscioneri, ogni scatto racconta una storia.
    </p>
    <button
      @click="scrollToSection('create')"
      class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white transition"
    >
      📖 Crea il tuo album
    </button>
  </div>

  <!-- Navbar in alto -->
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
</section>

<div class="min-h-screen bg-[#000] text-white px-4 py-10 flex flex-col items-center space-y-20">
    <!-- ✅ HERO -->
    <section class="text-center space-y-6 max-w-3xl">
      <h1 class="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-slide-in">
       Chi ci ha gia scelto
      </h1>
      <p class="text-zinc-200 text-lg leading-relaxed">
        Esplora, crea e condividi il tuo album personale. Ispirato dal lavoro di Andrea Piscioneri, ogni scatto racconta una storia.
      </p>
    </section>
<section class="w-full max-w-6xl mx-auto py-10" id="andrea">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch overflow-hidden rounded-xl min-h-[300px]">
    
    <!-- Colonna sinistra: testo -->
    <div class="z-10 bg-zinc-900/90 backdrop-blur px-6 py-10 flex flex-col justify-center text-center md:text-left space-y-4">
<a
  href="/andrea"
  target="_blank"
  rel="noopener"
  class="text-indigo-400 hover:underline text-2xl font-semibold"
>
  📸 Andrea Piscioneri
</a>

      <p class="text-zinc-400 text-lg leading-relaxed">
        Fotografo documentarista italiano, Andrea cattura l’essenza di luoghi, volti e storie con uno stile intimista e cinematografico.
        Il suo lavoro ispira chiunque voglia raccontarsi attraverso l'obiettivo.
      </p>
    </div>

    <!-- Colonna destra: immagine di sfondo -->
    <div
      class="relative w-full h-full min-h-[300px] bg-cover bg-center"
      style="background-image: url('/gallery/Francia2.jpeg');"
    >
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

  </div>
</section>

<section class="w-full max-w-6xl mx-auto py-10" id="andrea">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch overflow-hidden rounded-xl min-h-[300px]">
    
    <!-- Colonna sinistra: testo -->
    <div class="z-10 bg-zinc-900/90 backdrop-blur px-6 py-10 flex flex-col justify-center text-center md:text-left space-y-4">
<div class="text-indigo-400 text-2xl font-semibold">
  📸 Luca Rossi
</div>

      <p class="text-zinc-400 text-lg leading-relaxed">
       Luca è un fotografo documentarista italiano che cattura l’anima di luoghi, volti e storie con uno stile intimo e cinematografico.
Le sue immagini ispirano chiunque desideri raccontarsi attraverso lo sguardo dell’obiettivo.
      </p>
    </div>

    <!-- Colonna destra: immagine di sfondo -->
    <div
      class="relative w-full h-full min-h-[300px] bg-cover bg-center"
      style="background-image: url('/gallery/1.jpg');"
    >
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

  </div>
</section>
<!-- ✅ CREA IL TUO ALBUM (link a login) -->
<section class="w-full max-w-3xl text-center py-20" id="create">
  <h2 class="text-4xl font-bold mb-6 text-white">Crea il tuo Album Fotografico</h2>
  <p class="text-zinc-400 mb-8">
    Accedi per creare il tuo album personalizzato e iniziare a caricare le tue foto.
  </p>
<a
  href="/Login"
  target="_blank"
  rel="noopener"
  class="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition"
>
  🔐 Vai al Login
</a>


</section>


  </div>
<section class="w-full bg-[#000] text-white py-16">
  <div class="max-w-6xl mx-auto text-center space-y-10 px-4">
    <h2 class="text-4xl font-bold">📦 Scegli il tuo Pacchetto</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-zinc-800 p-6 rounded-xl shadow-md space-y-4">
        <h3 class="text-2xl font-semibold">Basic</h3>
        <p class="text-zinc-400">Perfetto per iniziare</p>
        <p class="text-3xl font-bold">€49</p>
        <ul class="text-zinc-400 space-y-1 text-sm">
          <li>✔ 20 foto</li>
          <li>✔ Album digitale</li>
          <li>✖ Nessuna stampa</li>
        </ul>
      </div>
      <div class="bg-zinc-800 p-6 rounded-xl shadow-md space-y-4 border border-indigo-500">
        <h3 class="text-2xl font-semibold text-indigo-400">Pro</h3>
        <p class="text-zinc-400">Per fotografi appassionati</p>
        <p class="text-3xl font-bold">€99</p>
        <ul class="text-zinc-400 space-y-1 text-sm">
          <li>✔ 50 foto</li>
          <li>✔ Album digitale + stampa</li>
          <li>✔ Supporto email</li>
        </ul>
      </div>
      <div class="bg-zinc-800 p-6 rounded-xl shadow-md space-y-4">
        <h3 class="text-2xl font-semibold">Premium</h3>
        <p class="text-zinc-400">Esperienza completa</p>
        <p class="text-3xl font-bold">€149</p>
        <ul class="text-zinc-400 space-y-1 text-sm">
          <li>✔ 100+ foto</li>
          <li>✔ Album digitale + stampa di qualità</li>
          <li>✔ Assistenza dedicata</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="w-full bg-[#000] text-white py-16">
  <div class="max-w-3xl mx-auto space-y-10 px-4">
    <h2 class="text-4xl font-bold text-center">📬 Contattami</h2>
    <form class="bg-zinc-800 p-6 rounded-xl space-y-4 shadow-lg">
      <input
        type="text"
        placeholder="Il tuo nome"
        class="w-full p-3 rounded bg-zinc-700 text-white placeholder-zinc-400"
      />
      <input
        type="email"
        placeholder="La tua email"
        class="w-full p-3 rounded bg-zinc-700 text-white placeholder-zinc-400"
      />
      <textarea
        placeholder="Scrivi il tuo messaggio..."
        rows="4"
        class="w-full p-3 rounded bg-zinc-700 text-white placeholder-zinc-400"
      ></textarea>
      <button
        type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition"
      >
        Invia Messaggio
      </button>
    </form>
  </div>
</section>

  <!-- ✅ Mostra i componenti delle rotte qui -->
  <router-view />
  <footer class="w-full bg-[#000] text-black py-6 border-zinc-800">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
    <!-- Logo e nome -->
    <div class="flex items-center space-x-3">
      <img src="/gallery/logo.png" alt="Logo" class="h-8 w-auto" />
      <span class="text-white font-semibold text-lg">Andrea Piscioneri</span>
    </div>

    <!-- Credits -->
    <div class="text-sm text-zinc-500">
      © 2025 Tutti i diritti riservati. Realizzato da Andrea Piscioneri.
    </div>
  </div>
</footer>
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
