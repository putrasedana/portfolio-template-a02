<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import SectionTitle from '../components/SectionTitle.vue'
import AppCard from '../components/AppCard.vue'
import AppButton from '../components/AppButton.vue'
import { about, personalInfo } from '../data/portfolio'

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
          title="About Me"
          subtitle="Get to know more about my background and expertise"
          centered
        />

        <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <AppCard>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
                <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {{ about.bio }}
                </div>

                <div class="mt-8">
                  <AppButton variant="primary" href="/dummy-cv.pdf">
                    📄 Download CV
                  </AppButton>
                </div>
              </div>
            </AppCard>
          </div>

          <div class="space-y-8">
            <AppCard>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
                <div class="space-y-3 text-sm">
                  <div class="flex items-start">
                    <span class="text-xl mr-3">📍</span>
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">Location</p>
                      <p class="text-gray-600 dark:text-gray-400">{{ personalInfo.location }}</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <span class="text-xl mr-3">✉️</span>
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">Email</p>
                      <a :href="`mailto:${personalInfo.email}`" class="text-primary-600 dark:text-primary-400 hover:underline">
                        {{ personalInfo.email }}
                      </a>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <span class="text-xl mr-3">📱</span>
                    <div>
                      <p class="font-medium text-gray-900 dark:text-white">Phone</p>
                      <p class="text-gray-600 dark:text-gray-400">{{ personalInfo.phone }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AppCard>

            <AppCard>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>💼 5+ years experience</p>
                  <p>🚀 20+ projects completed</p>
                  <p>🏆 Multiple awards</p>
                  <p>🌍 Remote work ready</p>
                </div>
              </div>
            </AppCard>
          </div>
        </div>

        <div class="mt-16">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Hard Skills</h3>
          <AppCard>
            <div class="p-8">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div
                  v-for="skill in about.hardSkills"
                  :key="skill"
                  class="bg-gray-50 dark:bg-gray-700 px-4 py-3 rounded-lg text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {{ skill }}
                </div>
              </div>
            </div>
          </AppCard>
        </div>

        <div class="mt-16">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Soft Skills</h3>
          <AppCard>
            <div class="p-8">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div
                  v-for="skill in about.softSkills"
                  :key="skill"
                  class="bg-gray-50 dark:bg-gray-700 px-4 py-3 rounded-lg text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {{ skill }}
                </div>
              </div>
            </div>
          </AppCard>
        </div>

        <div class="mt-16">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tools & Technologies</h3>
          <AppCard>
            <div class="p-8">
              <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                <div
                  v-for="tool in about.tools"
                  :key="tool.name"
                  class="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span class="text-4xl">{{ tool.icon }}</span>
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ tool.name }}</span>
                </div>
              </div>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  </div>
</template>
