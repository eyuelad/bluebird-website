<template>
  <div class="home-hero-container relative z-10 bg-white">
    <div id="home-hero" class="home-hero py-20 bg-cover bg-center">
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-b from-gray-900/25 to-gray-900/90"
      ></div>

      <div
        class="relative container px-4 sm:px-6 lg:px-8 flex justify-center text-center"
      >
        <div class="text-white max-w-3xl">
          <div class="h-48"></div>
          <h1
            :class="[
              'font-bold mb-6 leading-tight opacity-0',
              showTitle ? 'fade-up-active' : 'fade-up-hidden',
            ]"
          >
            <div class="mb-3 text-2xl uppercase">Welcome to</div>

            <!-- observed title; will fade-up when it enters viewport -->
            <div
              class="font-display font-normal text-5xl md:text-7xl lg:text-8xl"
            >
              BlueBird <br />
              Elderly Care
            </div>
          </h1>
          <p
            :class="[
              'font-serif md:text-xl mb-8 leading-relaxed opacity-0 !delay-300',
              showTitle ? 'fade-up-active' : 'fade-up-hidden',
            ]"
          >
            Located in Mill Creek, Washington
          </p>
          <div
            :class="[
              'flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 !delay-700',
              showTitle ? 'fade-up-active' : 'fade-up-hidden',
            ]"
          >
            <UButton
              icon="lucide:phone"
              href="tel:+12063132874"
              color="primary"
              size="xl"
            >
              Call +1 (206) 313-2874
            </UButton>

            <UButton
              icon="lucide:calendar"
              to="#contact"
              variant="outline"
              size="xl"
              class="border border-white text-white"
            >
              Schedule a Tour
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useIntersectionObserver from "~/composables/useIntersectionObserver";

const showTitle = ref(false);

// observe the title and show it (animate) when it becomes visible
useIntersectionObserver("#home-hero", {
  callback(isVisible: boolean) {
    if (isVisible) showTitle.value = true;
  },
  once: true,
  delay: 150,
});
</script>

<style>
.home-hero-container {
  clip-path: ellipse(150% 100% at 50% 0%);
}

.home-hero {
  background-image: url("/images/home/02-Green.webp");
}

/* fade-up class-based animation for hero title (no <transition>) */
.fade-up-hidden {
  opacity: 0;
  transform: translateY(18px) scale(0.995);
  transition: opacity 420ms ease-out, transform 420ms ease-out;
}
.fade-up-active {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 420ms ease-out, transform 420ms ease-out;
}
</style>
