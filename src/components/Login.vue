<template>
  <div class="min-h-screen bg-[#000] text-white flex items-center justify-center px-4">
    <div class="bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
      <h1 class="text-3xl font-bold text-center mb-4">🔐 Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          required
          class="w-full p-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
        />

        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          class="w-full p-3 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
        />

        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition"
        >
          Accedi
        </button>
      </form>

      <p class="text-center text-sm text-zinc-400">
        Non hai un account?
        <router-link to="/register" class="text-indigo-400 hover:underline">Registrati</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)

  // Simulazione login
  alert('Login simulato. Reindirizzamento in corso...')

  // 👇 Redirect al componente "Crea.vue"
  router.push('/crea')
}
</script>


<style scoped>
</style>
