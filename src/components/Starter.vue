<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ titlle: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="p-6">
    <button type="button" @click="count++">You click is {{ count }}</button>
  </div>

  <p class="text-[#888]">Click on the Vite and Vue logos to learn more</p>
</template>
