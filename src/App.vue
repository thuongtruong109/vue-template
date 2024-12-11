<script setup lang="ts">
import { RouterView } from 'vue-router'
import Starter from '@/components/Starter.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Starter title="Vue starter template" />
  <Header />
  <RouterView />
</template>
