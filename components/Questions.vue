<template>
  <div class="py-32 lg:py-20 group overflow-x-clip">
    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div
          class="max-lg:order-2 lg:col-span-6 max-lg:flex flex-col items-center"
        >
          <h2
            class="font-display text-4xl font-bold capitalize mb-8 md:max-lg:max-w-xl max-lg:text-center"
          >
            Is now the right time to consider an elderly home?
          </h2>

          <div>
            <UButton
              trailing-icon="lucide:move-right"
              color="primary"
              size="xl"
              @click="openModal"
            >
              Find Out Here
            </UButton>
          </div>
        </div>
        <div class="max-lg:order-1 relative lg:col-span-6 flex items-center">
          <NuxtImg
            src="/images/home-2-1.jpg"
            alt="Elderly Care Home"
            class="rounded-lg shadow-lg aspect-[1.8] object-cover"
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

        <div class="relative w-full h-full bg-gray-900">
          <div class="h-full flex flex-col lg:flex-row items-stretch">
            <div
              class="lg:w-5/12 min-h-2/5 lg:h-full lg:col-span-5 flex items-center"
            >
              <NuxtImg
                :src="images[currentIndex]"
                alt="Elderly Care Home"
                class="object-cover h-full w-full bg-gray-600"
              />
            </div>
            <div
              class="overflow-auto no-scrollbar relative lg:w-7/12 h-full flex-col items-center p-6 text-center"
            >
              <div class="sticky top-0 w-full flex items-center bg-gray-900">
                <UButton
                  class=""
                  icon="lucide:chevron-left"
                  variant="link"
                  size="xl"
                  color="neutral"
                  aria-label="Previous"
                  :disabled="finished"
                  @click="onPreviousQuestion"
                />

                <UButton
                  class=""
                  icon="lucide:chevron-right"
                  variant="link"
                  size="xl"
                  color="neutral"
                  aria-label="Next"
                  :disabled="finished"
                  @click="onNextQuestion"
                />
                <UButton
                  class="ml-auto"
                  icon="lucide:x"
                  variant="link"
                  size="xl"
                  color="neutral"
                  @click="closeModal"
                  aria-label="Close"
                />
              </div>

              <transition name="slide-fade" mode="out-in">
                <div
                  :key="finished ? 'result' : currentIndex"
                  class="max-w-2xl mx-auto h-full flex items-center justify-center"
                >
                  <div v-if="!finished">
                    <p class="text-sm text-gray-400 mb-4">
                      Question {{ currentIndex + 1 }} of {{ total }}
                    </p>
                    <h3 class="text-2xl lg:text-3xl font-semibold mb-8">
                      {{ currentQuestion }}
                    </h3>

                    <div class="flex items-center justify-center gap-4">
                      <UButton @click="answer(true)" color="primary" size="xl"
                        >Yes</UButton
                      >
                      <UButton
                        @click="answer(false)"
                        variant="outline"
                        color="primary"
                        class="text-white"
                        size="xl"
                        >No</UButton
                      >
                    </div>
                  </div>

                  <div v-else>
                    <template v-if="hasYes">
                      <h3
                        class="text-xl lg:text-2xl font-display font-semibold mb-6"
                      >
                        Our care home could be a good fit for your loved one.
                      </h3>

                      <ContactForm mini :message="contactMessage" />

                      <div class="flex gap-4 items-center my-6">
                        <hr class="flex-1 border-gray-600" />
                        <span class="text-gray-300">OR</span>
                        <hr class="flex-1 border-gray-600" />
                      </div>

                      <div class="flex justify-center gap-4">
                        <!-- <UButton
                            icon="lucide:calendar"
                            color="primary"
                            variant="solid"
                            size="xl"
                            class=""
                            @click="onSchedule"
                            >Schedule a Tour</UButton
                          > -->
                        <UButton
                          icon="lucide:phone"
                          color="neutral"
                          variant="outline"
                          size="xl"
                          block
                          href="tel:+12063132874"
                        >
                          Call +1 (206) 313-2874
                        </UButton>
                      </div>
                    </template>
                    <template v-else>
                      <p class="text-lg">
                        We might not be the best fit for you.
                      </p>
                    </template>
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

const images = ref<string[]>([
  "/images/family/1.webp",
  "/images/family/4.webp",
  "/images/family/2.webp",
  "/images/family/3.webp",
  "/images/family/6.webp",
  "/images/family/7.webp",
  "/images/family/8.webp",
  "/images/family/11.webp",
]);

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

const contactMessage = computed(() => {
  return `I have completed the questionnaire and would like to learn more about your care home.`;
});
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
