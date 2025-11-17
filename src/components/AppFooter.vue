<script setup lang="ts">
import { personalInfo } from "../data/portfolio";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3
            class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4"
          >
            {{ personalInfo.name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ personalInfo.tagline }}
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                to="/experience"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Experience
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect
          </h4>
          <div class="space-y-2">
            <a
              :href="`https://github.com/${personalInfo.github}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <icon-mdi-github class="w-5 h-5 mr-2" />
              GitHub
            </a>

            <a
              :href="`https://linkedin.com/in/${personalInfo.linkedin}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <icon-mdi-linkedin class="w-5 h-5 mr-2" />
              LinkedIn
            </a>

            <a
              :href="`mailto:${personalInfo.email}`"
              class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <icon-mdi-email class="w-5 h-5 mr-2" />
              Email
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <p class="text-gray-600 dark:text-gray-400">
          © {{ currentYear }} {{ personalInfo.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
