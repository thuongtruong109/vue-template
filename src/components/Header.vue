<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DarkMode from '@/components/DarkMode.vue'
</script>

<template>
  <nav
    class="text-center w-full text-base mt-4 pt-4 border-t dark:border-gray-600 flex justify-center items-center"
  >
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <div class="w-[1px] h-5 !bg-gray-300 mx-4" />
    <DarkMode />
  </nav>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0.25rem 1.5rem;
  color: inherit;
  font-weight: 400;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #646cff;
  font-weight: 600;
  background-color: #646cff11;
}
</style>
