<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import SectionTitle from '../components/SectionTitle.vue'
import AppCard from '../components/AppCard.vue'
import { experience } from '../data/portfolio'

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
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="sectionRef">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and career highlights"
          centered
        />

        <div class="mt-16 relative">
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          <div class="space-y-12">
            <div
              v-for="(job, index) in experience"
              :key="job.id"
              class="relative"
            >
              <div
                class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900"
              ></div>

              <div
                :class="[
                  'ml-8 md:ml-0',
                  index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                ]"
              >
                <AppCard hover>
                  <div class="p-6 md:p-8">
                    <div class="flex items-start justify-between mb-4">
                      <div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {{ job.position }}
                        </h3>
                        <p class="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {{ job.company }}
                        </p>
                      </div>
                      <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                        {{ job.timeline }}
                      </span>
                    </div>

                    <ul class="space-y-3">
                      <li
                        v-for="(achievement, idx) in job.achievements"
                        :key="idx"
                        class="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span class="text-primary-600 dark:text-primary-400 mr-2 mt-1">▸</span>
                        <span>{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                </AppCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
