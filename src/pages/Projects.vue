<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import SectionTitle from '../components/SectionTitle.vue'
import AppCard from '../components/AppCard.vue'
import AppButton from '../components/AppButton.vue'
import { projects } from '../data/portfolio'

const sectionRef = ref<HTMLElement>()

onMounted(() => {
  if (sectionRef.value) {
    useMotion(sectionRef.value, {
      initial: { opacity: 0, y: 30 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          ease: 'easeOut',
        },
      },
    })
  }
})
</script>

<template>
  <div class="min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="sectionRef">
        <SectionTitle
          title="Projects"
          subtitle="A showcase of my recent work and side projects"
          centered
        />

        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AppCard
            v-for="project in projects"
            :key="project.id"
            hover
          >
            <div class="h-full flex flex-col">
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {{ project.title }}
                </h3>

                <p class="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {{ project.description }}
                </p>

                <div class="mb-4">
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project.techStack"
                      :key="tech"
                      class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="flex gap-3 mt-auto">
                  <AppButton
                    variant="primary"
                    size="sm"
                    :href="project.liveDemo"
                    class="flex-1"
                  >
                    Live Demo
                  </AppButton>
                  <AppButton
                    variant="outline"
                    size="sm"
                    :href="project.github"
                    class="flex-1"
                  >
                    GitHub
                  </AppButton>
                </div>
              </div>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  </div>
</template>
