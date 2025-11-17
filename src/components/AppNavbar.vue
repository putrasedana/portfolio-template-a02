<script setup lang="ts">
import { ref } from "vue";
import { useDarkMode } from "../composables/useDarkMode";

const { isDark, toggleDarkMode } = useDarkMode();
const mobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<template>
  <nav
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <router-link
          to="/"
          class="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Alex Morgan
        </router-link>

        <!-- DESKTOP NAV -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            active-class="text-primary-600 dark:text-primary-400"
          >
            {{ link.name }}
          </router-link>

          <!-- Dark mode toggle (Desktop) -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            <icon-lucide-sun v-if="isDark" class="w-6 h-6" />
            <icon-lucide-moon
              v-else
              class="w-6 h-6 text-gray-700 dark:text-gray-200"
            />
          </button>
        </div>

        <!-- MOBILE NAV -->
        <div class="md:hidden flex items-center space-x-4">
          <!-- Dark mode toggle (Mobile) -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            <icon-lucide-sun v-if="isDark" class="w-6 h-6" />
            <icon-lucide-moon
              v-else
              class="w-6 h-6 text-gray-700 dark:text-gray-200"
            />
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <icon-lucide-menu
              v-if="!mobileMenuOpen"
              class="w-6 h-6 text-gray-700 dark:text-gray-300"
            />
            <icon-lucide-x
              v-else
              class="w-6 h-6 text-gray-700 dark:text-gray-300"
            />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div class="px-4 py-4 space-y-3">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="closeMobileMenu"
          class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          active-class="bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
