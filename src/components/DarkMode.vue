<script setup lang="ts">
import useTheme from '@/composables/useTheme'
import { BiSun } from 'vue-icons-plus/bi'
import { AiFillMoon } from 'vue-icons-plus/ai'
import Icon from '@/components/common/Icon.vue'

const { currentTheme, switchTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="overflow-hidden p-2 text-yellow-600 dark:text-purple-500 bg-yellow-600/10 dark:bg-gray-700"
    @click="switchTheme()"
  >
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
      <Icon v-if="currentTheme === 'dark'" :icon="AiFillMoon" :size="5" />
      <Icon v-else :icon="BiSun" :size="5" />
    </transition>
  </button>
</template>
