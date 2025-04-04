<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div class="text-center max-w-md">
        <h1 class="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Página não encontrada</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          A página que você está procurando não existe ou foi movida.
        </p>
        <router-link 
          to="/" 
          class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
        >
          Voltar para a página inicial
        </router-link>
      </div>
    </div>
  </template>