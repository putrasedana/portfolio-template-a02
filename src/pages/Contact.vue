<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import SectionTitle from '../components/SectionTitle.vue'
import AppCard from '../components/AppCard.vue'
import AppButton from '../components/AppButton.vue'
import { personalInfo } from '../data/portfolio'

const sectionRef = ref<HTMLElement>()
const formData = ref({
  name: '',
  email: '',
  message: '',
})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  await new Promise(resolve => setTimeout(resolve, 1500))

  submitSuccess.value = true
  isSubmitting.value = false

  formData.value = {
    name: '',
    email: '',
    message: '',
  }

  setTimeout(() => {
    submitSuccess.value = false
  }, 3000)
}

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
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="sectionRef">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
          centered
        />

        <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="space-y-6">
            <AppCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <span class="text-3xl mr-4">📧</span>
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a
                      :href="`mailto:${personalInfo.email}`"
                      class="text-primary-600 dark:text-primary-400 hover:underline text-sm"
                    >
                      {{ personalInfo.email }}
                    </a>
                  </div>
                </div>
              </div>
            </AppCard>

            <AppCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <span class="text-3xl mr-4">📱</span>
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                      {{ personalInfo.phone }}
                    </p>
                  </div>
                </div>
              </div>
            </AppCard>

            <AppCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <span class="text-3xl mr-4">📍</span>
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                      {{ personalInfo.location }}
                    </p>
                  </div>
                </div>
              </div>
            </AppCard>

            <AppCard>
              <div class="p-6">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Social Links</h3>
                <div class="space-y-3">
                  <a
                    :href="`https://github.com/${personalInfo.github}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <span class="text-2xl mr-3">📦</span>
                    <span>GitHub</span>
                  </a>
                  <a
                    :href="`https://linkedin.com/in/${personalInfo.linkedin}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <span class="text-2xl mr-3">💼</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </AppCard>
          </div>

          <div class="lg:col-span-2">
            <AppCard>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      v-model="formData.message"
                      required
                      rows="6"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <div v-if="submitSuccess" class="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>

                  <AppButton
                    variant="primary"
                    size="lg"
                    type="submit"
                    class="w-full"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </AppButton>
                </form>
              </div>
            </AppCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
