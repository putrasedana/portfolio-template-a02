<script setup lang="ts">
defineProps<{
  hover?: boolean
}>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300"
    :class="hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''"
  >
    <slot />
  </div>
</template>
