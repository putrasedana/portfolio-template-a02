<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="centered ? 'text-center' : ''">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl" :class="centered ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>
