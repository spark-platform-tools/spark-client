<template>
  <ThemeProvider>
    <RouterView />
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
</script>
