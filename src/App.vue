<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Starter from '@/components/Starter.vue'
import DarkMode from '@/components/DarkMode.vue'
</script>

<template>
  <DarkMode />

  <div class="flex justify-center">
    <a href="https://vite.dev" target="_blank">
      <img src="./assets/img/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/img/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <Starter title="Vue starter template" />

  <nav class="text-center w-full text-base mt-8">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
.logo {
  height: 8em;
  padding: 1.5em 2em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: inherit;
}

nav a.router-link-exact-active {
  color: #646cff;
  font-weight: 500;
  background-color: #646cff11;
}
</style>
