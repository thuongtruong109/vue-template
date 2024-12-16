<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DarkMode from '@/components/DarkMode.vue'
import Logo from '@/components/Logo.vue'
</script>

<template>
  <header
    class="w-full flex justify-between md:justify-around items-center pb-4 border-b dark:border-gray-700"
  >
    <Logo name="Vuetus" data-aos="fade-right" />
    <nav class="text-center text-base flex items-center" data-aos="fade-left">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <div class="w-[1px] h-5 !bg-gray-300 mx-4" />
      <DarkMode />
    </nav>
  </header>
</template>

<style scoped>
header nav a {
  display: inline-block;
  padding: 0.25rem 1.5rem;
  color: inherit;
  font-weight: 400;
  border-radius: 4px;
}

header nav a.router-link-exact-active {
  color: #646cff;
  font-weight: 600;
  background-color: #646cff11;
}
</style>
