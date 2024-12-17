<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  size?: number
}>()
</script>

<template>
  <div>
    <component :is="icon" :class="`size-${size ? size : 4}`" />
  </div>
</template>
