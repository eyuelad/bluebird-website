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

    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <div
        v-for="image in images"
        :key="image.id"
        class="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
          placeholder
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Generate 30 deterministic placeholder images with varying heights
const images = Array.from({ length: 30 }).map((_, i) => {
  // Deterministic height variation between 300px and 600px
  const height = 300 + ((i * 137) % 300);
  return {
    id: i,
    // Using picsum with seed for consistent images
    src: `https://picsum.photos/seed/bluebird${i}/600/${height}`,
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
