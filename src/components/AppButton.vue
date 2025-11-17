<script setup lang="ts">
defineProps<{
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
}>();
</script>

<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="cursor-pointer inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
    :class="[
      variant === 'primary'
        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
        : variant === 'secondary'
        ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        : 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800',
      size === 'sm'
        ? 'px-4 py-2 text-sm'
        : size === 'lg'
        ? 'px-8 py-4 text-lg'
        : 'px-6 py-3 text-base',
    ]"
  >
    <slot />
  </component>
</template>
