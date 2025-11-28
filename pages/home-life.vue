<template>
  <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Home Life
      </h1>
      <p class="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        A glimpse into the daily life and happy moments at BlueBird Millcreek.
      </p>
    </div>

    <div
      class="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
    >
      <div
        v-for="image in images"
        :key="image.id"
        class="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          class="w-full min-h-24 h-auto object-cover bg-gray-700 transform hover:scale-105 transition-transform duration-500"
          placeholder
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = Array.from({ length: 23 }).map((_, i) => {
  return {
    id: i,
    src: `/images/home-life/${i + 1}.jpg`,
    alt: `Home Life Moment ${i + 1}`,
  };
});

useHead({
  title: "Home Life - BlueBird Millcreek",
  meta: [
    {
      name: "description",
      content:
        "View our gallery of daily life and special moments at BlueBird Millcreek.",
    },
  ],
});
</script>
