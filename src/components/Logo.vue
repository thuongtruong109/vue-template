<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{ name: string }>()

const router = useRouter()
const goHome = () => router.push('/')
</script>

<!-- https://icons8.com/icons/set/external-uniregistry-a-large-retail-domain-name-re -->

<template>
  <div class="flex items-center space-x-2 cursor-pointer" @click="goHome()">
    <figure class="bg-[#E3F8FA] dark:bg-cyan-500/20 p-2 rounded-md">
      <img src="/logo.png" alt="logo" class="size-5" width="20" height="20" />
    </figure>
    <h1 class="text-2xl font-semibold drop-shadow-md text-cyan-500">{{ name }}</h1>
  </div>
</template>
