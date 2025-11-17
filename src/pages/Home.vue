<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";
import AppButton from "../components/AppButton.vue";
import { personalInfo } from "../data/portfolio";
import heroImg from "../assets/hero-img.jpg";

const heroRef = ref<HTMLElement>();
const imageRef = ref<HTMLElement>();

onMounted(() => {
  if (heroRef.value) {
    useMotion(heroRef.value, {
      initial: { opacity: 0, y: 50 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          ease: "easeOut",
        },
      },
    });
  }

  if (imageRef.value) {
    useMotion(imageRef.value, {
      initial: { opacity: 0, scale: 0.8 },
      enter: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1000,
          delay: 200,
          ease: "easeOut",
        },
      },
    });
  }
});
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- IMAGE ON TOP (MOBILE), RIGHT ON DESKTOP -->
        <div
          ref="imageRef"
          class="order-1 lg:order-2 flex justify-center mt-10 lg:mt-0"
        >
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"
            ></div>

            <img
              :src="heroImg"
              alt="Profile"
              class="relative rounded-3xl shadow-2xl w-full h-auto object-cover mx-auto"
            />
          </div>
        </div>

        <!-- TEXT BELOW ON MOBILE, LEFT ON DESKTOP -->
        <div ref="heroRef" class="order-2 lg:order-1">
          <div
            class="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
          >
            👋 Welcome to my portfolio
          </div>

          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm
            <span class="text-primary-600 dark:text-primary-400">{{
              personalInfo.name
            }}</span>
          </h1>

          <p
            class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold mb-6"
          >
            {{ personalInfo.profession }}
          </p>

          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
          >
            {{ personalInfo.intro }}
          </p>

          <div class="flex flex-wrap gap-4">
            <AppButton variant="primary" size="lg" to="/projects">
              View Projects
            </AppButton>
            <AppButton variant="outline" size="lg" to="/contact">
              Contact Me
            </AppButton>
          </div>

          <div class="mt-12 flex items-center space-x-6">
            <a
              :href="`https://github.com/${personalInfo.github}`"
              target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <icon-mdi-github class="w-9 h-9" />
            </a>

            <a
              :href="`https://linkedin.com/in/${personalInfo.linkedin}`"
              target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <icon-mdi-linkedin class="w-9 h-9" />
            </a>

            <a
              :href="`mailto:${personalInfo.email}`"
              class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <icon-mdi-email class="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
