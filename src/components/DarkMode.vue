<script setup lang="ts">
const { currentTheme, switchTheme } = useTheme()
</script>

<template>
  <header class="absolute inset-x-0 top-0">
    <div class="container mx-auto flex justify-end p-4">
      <button class="overflow-hidden p-2 text-slate-500" @click="switchTheme()">
        <transition
          enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-200 ease-in"
          :enter-from-class="
            currentTheme === 'dark'
              ? 'transform -translate-y-full scale-50 opacity-0'
              : 'transform translate-y-full scale-50 opacity-0'
          "
          enter-to-class="transform translate-y-0"
          leave-from-class="transform translate-y-0"
          :leave-to-class="
            currentTheme === 'dark'
              ? 'transform translate-y-full scale-50 opacity-0'
              : 'transform -translate-y-full scale-50 opacity-0'
          "
          mode="out-in"
        >
          <svg
            v-if="currentTheme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </transition>
      </button>
    </div>
  </header>
</template>
