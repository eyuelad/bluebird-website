<template>
  <div class="home-hero-container relative z-10">
    <div id="home-hero" class="home-hero py-20 bg-cover bg-center">
      <div class="home-hero__bg absolute top-0 w-full h-full bg-cover"></div>
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-b from-gray-900/25 to-gray-900/90"
      ></div>

      <div class="container px-4 sm:px-6 lg:px-8 max-sm:text-center">
        <div class="h-48"></div>
        <div class="grid lg:grid-cols-12 items-center">
          <div class="lg:col-span-8 text-white">
            <h1
              :class="[
                'font-bold mb-6 leading-tight opacity-0',
                showTitle ? 'fade-up-active' : 'fade-up-hidden',
              ]"
            >
              <div
                class="font-display font-normal text-4xl md:text-5xl lg:text-6xl"
              >
                BlueBird
                <div class="text-primary-400">Elderly Care</div>
              </div>

              <em>In Millcreek</em>
            </h1>

            <div
              :class="[
                'mb-12 sm:flex space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 !delay-700',
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

          <div class="lg:col-span-4">
            <video
              :class="[
                'max-sm:w-2/3 mx-auto aspect-square object-cover rounded-full grayscale-100 bg-gray-500 !delay-300',
                showTitle ? 'fade-up-active' : 'fade-up-hidden',
              ]"
              src="/videos/hero-opt.mp4"
              muted
              autoplay
              loop
              playsinline
            ></video>
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

.home-hero__bg {
  background-image: url("/images/home/02-Green.webp");
  background-position: center;
  background-size: cover;
  filter: grayscale(1);
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
