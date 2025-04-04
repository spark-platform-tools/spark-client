<template>
  <header class="sticky top-0 w-full bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 z-50">
    <!-- Mobile Header -->
    <div class="lg:hidden">
      <div class="flex items-center justify-between px-4 py-3">
        <!-- Logo + Platform Name -->
        <div class="flex items-center">
          <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
          </div>
          <span class="ml-2 text-lg font-semibold text-gray-800 dark:text-white">Spark</span>
        </div>

        <!-- Menu Button -->
        <button @click="toggleMenu"
          class="flex items-center justify-center w-10 h-10 text-purple-600 rounded-lg hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/30"
          aria-label="Toggle menu">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="toggleMenu"></div>

      <!-- Mobile Menu Content -->
      <div :class="[menuOpen ? 'translate-x-0' : '-translate-x-full']"
        class="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white dark:bg-gray-800 shadow-xl z-50 transition-transform duration-300 ease-in-out">
        <div class="flex flex-col h-full overflow-y-auto p-4">
          <!-- Menu Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                  </path>
                </svg>
              </div>
              <span class="ml-2 text-lg font-semibold text-gray-800 dark:text-white">Spark</span>
            </div>
            <button @click="toggleMenu" class="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Navigation Links -->
          <nav class="flex-1 space-y-2">
            <a href="/"
              class="block px-3 py-2 text-sm font-medium rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30">Início</a>
            <a href="/price"
              class="block px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30">Preços</a>
            <a href="/documentation"
              class="block px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30">Documentação</a>
          </nav>

          <!-- Menu Footer -->
          <div class="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between px-3 py-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Tema</span>
              <ThemeToggler />
            </div>
            <div class="mt-4 space-y-2">
              <a href="/signin"
                class="block w-full px-3 py-2 text-sm font-medium text-center rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30">Entrar</a>
              <a href="/signup"
                class="block w-full px-3 py-2 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">Cadastrar</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Header -->
    <div class="hidden lg:flex items-center justify-between px-6 py-3">
      <a href="/">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
          </div>
          <span class="ml-2 text-lg font-semibold text-gray-800 dark:text-white">Spark</span>
        </div>
      </a>
      <div class="flex items-center space-x-4">
        <nav class="flex items-center space-x-6 mr-10">
          <a href="/"
            class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">Início</a>
          <a href="/price"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Preços</a>
          <a href="/documentation"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Documentação</a>
        </nav>
        <ThemeToggler />
        <a href="/signin"
          class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">Entrar</a>
        <a href="/signup"
          class="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">Cadastrar</a>
      </div>
    </div>
  </header>
  <FooterLayout />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggler from '../common/ThemeToggler.vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>