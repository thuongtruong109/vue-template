<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col space-y-6">
    <div class="flex justify-center space-x-10 py-6" data-aos="fade-right">
      <a href="https://vite.dev" target="_blank">
        <img src="@/assets/imgs/vite.svg" class="logo" alt="Vite logo" width="64" height="64" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/imgs/vue.svg" class="logo vue" alt="Vue logo" width="64" height="64" />
      </a>
      <a href="https://pinia.vuejs.org/" target="_blank">
        <img
          src="@/assets/imgs/pinia.svg"
          class="logo pinia"
          alt="Pinia logo"
          width="64"
          height="64"
        />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img
          src="@/assets/imgs/tailwind.svg"
          class="logo tailwind"
          alt="Tailwind logo"
          width="64"
          height="64"
        />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          src="@/assets/imgs/typescript.svg"
          class="logo typescript"
          alt="Typescript logo"
          width="64"
          height="64"
        />
      </a>
    </div>

    <h1 class="font-semibold py-4 font-rowdies" data-aos="fade-left">{{ title }}</h1>

    <p class="text-[#888]" data-aos="fade-up">Click on the any logo to learn more</p>

    <div class="counter p-6 space-x-4 flex justify-center items-center" data-aos="fade-up">
      <button
        type="button"
        aria-label="Minus ounter"
        @click="count--"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        -
      </button>
      <span>You click is: {{ count }}</span>
      <button
        type="button"
        aria-label="Added counter"
        @click="count++"
        class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 4rem;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #ff6b6baa);
}

.logo.tailwind:hover {
  filter: drop-shadow(0 0 2em #06b6d4aa);
}

.logo.typescript:hover {
  filter: drop-shadow(0 0 2em #3178c6aa);
}

.counter button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: rgb(14 165 233);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
