<template>
  <div class="relative bg-white" id="home">
    <div class="home-hero py-20 bg-cover bg-center">
      <div
        class="absolute top-0 w-full h-full bg-gradient-to-b from-slate-900/25 to-slate-900/90"
      ></div>

      <div
        class="relative container px-4 sm:px-6 lg:px-8 flex justify-center text-center"
      >
        <div class="text-white max-w-3xl">
          <div class="h-48"></div>
          <h1 class="font-bold mb-6 leading-tight">
            <div class="text-3xl">Welcome to</div>
            <div class="font-display text-5xl md:text-7xl">
              BlueBird Elderly Care
            </div>
          </h1>
          <p class="font-sans text-xl md:text-2xl mb-8 leading-relaxed">
            Located in Mill Creek, Washington
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
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

<script setup lang="ts"></script>

<style>
.home-hero {
  background-image: url("/images/home/02-Green.webp");
}
</style>
