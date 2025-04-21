<template>
  <div v-if="data" class="text-center max-w-2xl mx-auto">
    <h1
      class="text-4xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent animate-slide-in"
    >
      {{ data.title }}
    </h1>
    <p class="text-lg text-zinc-300 leading-relaxed">{{ data.content }}</p>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>

<style scoped>
@keyframes slide-in {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.6s ease-out;
}
</style>
