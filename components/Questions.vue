<template>
  <div class="py-20 bg-white">
    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-5">
          <h2
            class="font-display text-4xl font-bold capitalize text-gray-900 mb-4"
          >
            Is now the right time to consider an elderly home?
          </h2>

          <div>
            <UButton
              icon="lucide:arrow-right"
              color="primary"
              size="xl"
              class="bg-primary-600 hover:bg-primary-700 text-white"
              @click="openModal"
            >
              Find Out Here
            </UButton>
          </div>
        </div>
        <div class="lg:col-span-7 flex items-center">
          <NuxtImg
            src="/images/family/4.webp"
            alt="Elderly Care Home"
            class="rounded-lg shadow-lg aspect-[2] object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Fullscreen Questions Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
    >
      <div class="relative w-full h-full rounded-2xl overflow-hidden">
        <!-- <div
          class="absolute top-0 w-full h-full bg-[url('/images/family/11.webp')] bg-cover"
        ></div>

        <div class="absolute top-0 w-full h-full bg-gray-950/90"></div> -->

        <div class="relative w-full h-full bg-gray-50">
          <div class="h-full flex flex-col lg:flex-row items-stretch">
            <div
              class="lg:w-5/12 h-1/2 lg:h-full lg:col-span-5 flex items-center"
            >
              <NuxtImg
                src="/images/family/11.webp"
                alt="Elderly Care Home"
                class="object-cover h-full w-full bg-gray-300"
                width="100%"
                height="100%"
              />
            </div>
            <div
              class="relative lg:w-7/12 h-full flex items-center px-6 lg:px-12 py-12 text-center"
            >
              <div class="absolute left-3 top-6 flex">
                <UButton
                  class=""
                  icon="lucide:chevron-left"
                  variant="ghost"
                  size="xl"
                  color="neutral"
                  aria-label="Previous"
                  :disabled="finished"
                  @click="onPreviousQuestion"
                />

                <UButton
                  class=""
                  icon="lucide:chevron-right"
                  variant="ghost"
                  size="xl"
                  color="neutral"
                  aria-label="Next"
                  :disabled="finished"
                  @click="onNextQuestion"
                />
              </div>

              <UButton
                class="absolute top-6 right-6 z-50"
                icon="lucide:x"
                variant="ghost"
                size="xl"
                color="neutral"
                @click="closeModal"
                aria-label="Close"
              />
              <transition name="slide-fade" mode="out-in">
                <div
                  :key="finished ? 'result' : currentIndex"
                  class="max-w-2xl mx-auto"
                >
                  <div v-if="!finished">
                    <p class="text-sm text-gray-500 mb-4">
                      Question {{ currentIndex + 1 }} of {{ total }}
                    </p>
                    <h3
                      class="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8"
                    >
                      {{ currentQuestion }}
                    </h3>

                    <div class="flex items-center justify-center gap-4">
                      <UButton @click="answer(true)" color="primary" size="xl"
                        >Yes</UButton
                      >
                      <UButton
                        @click="answer(false)"
                        variant="outline"
                        size="xl"
                        >No</UButton
                      >
                    </div>
                  </div>

                  <div v-else>
                    <div class="py-12">
                      <template v-if="hasYes">
                        <p class="text-lg text-gray-700 mb-6">
                          Under the leadership of Nurse Elsa Amanuel, for the
                          last 10 years, the houses of Bluebird Elderly Care has
                          been a home away from for many residents where life is
                          enjoyed with dignity as if the above limitations don't
                          exist?
                        </p>
                        <div class="flex justify-center gap-4">
                          <UButton
                            icon="lucide:calendar"
                            color="primary"
                            variant="solid"
                            size="xl"
                            class=""
                            @click="onSchedule"
                            >Schedule a Tour</UButton
                          >
                          <UButton
                            icon="lucide:calendar"
                            color="primary"
                            variant="outline"
                            size="xl"
                            href="tel:+12063132874"
                          >
                            Call +1 (206) 313-2874
                          </UButton>
                        </div>
                      </template>
                      <template v-else>
                        <p class="text-lg text-gray-700">You're good.</p>
                      </template>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{ questions?: string[] }>();
const emit = defineEmits<{
  (e: "schedule"): void;
}>();

const defaultQuestions =
  props.questions && props.questions.length
    ? props.questions
    : [
        "Has the resident experienced numerous falls?",
        "Does the resident have unattended incontinence?",
        "Does the resident suffer from disabling memory loss?",
        "Is the resident unable to care for themselves?",
        "Does the resident require ongoing nurse intervention?",
        "Is in-home care too expensive for the family?",
        "Is the resident experiencing severe isolation?",
        "Is there a risk to the caregiving spouse?",
      ];

const questions = defaultQuestions;
const total = questions.length;

const isOpen = ref(false);
const currentIndex = ref(0);
const answers = ref<boolean[]>([]);

const finished = ref(false); //computed(() => answers.value.length >= total);
const currentQuestion = computed(() => questions[currentIndex.value] ?? "");
const hasYes = computed(() => answers.value.includes(true));

function openModal() {
  currentIndex.value = 0;
  answers.value = [];
  isOpen.value = true;
  // disable body scroll
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  isOpen.value = false;
  finished.value = false;
  // re-enable body scroll
  document.body.classList.remove("overflow-hidden");
}

function onPreviousQuestion() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function onNextQuestion() {
  if (finished.value) return;
  // move to next question or finish
  if (currentIndex.value < total - 1) {
    currentIndex.value++;
  } else {
    // mark finished; keep index at last
    currentIndex.value = total - 1;
  }
}

function answer(value: boolean) {
  if (finished.value) return;
  answers.value.push(value);
  // move to next question or finish
  if (currentIndex.value < total - 1) {
    currentIndex.value++;
  } else {
    // mark finished; keep index at last
    finished.value = true;
    currentIndex.value = total - 1;
  }
}

function onSchedule() {
  closeModal();
  // navigate to contact anchor if present
  try {
    window.location.hash = "#contact";
  } catch (e) {
    // noop in non-browser env
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape" && isOpen.value) closeModal();
}

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.995);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.995);
}
</style>
