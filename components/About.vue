<template>
  <section class="py-20 bg-white" id="about">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="font-display text-4xl font-bold text-gray-900 mb-6">
            About BlueBird Millcreek
          </h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p class="text-lg">
              At BlueBird Millcreek Adult Family Home, we believe in providing
              exceptional care in a warm, home-like environment. Our adult
              family home offers personalized attention and support while
              maintaining the dignity and independence of our residents.
            </p>
            <p class="text-lg">
              Our experienced caregivers are passionate about creating a
              nurturing atmosphere where residents can thrive. We maintain a low
              resident-to-caregiver ratio to ensure each person receives the
              attention they deserve.
            </p>
            <p class="text-lg">
              Licensed and certified, our facility meets the highest standards
              of care while offering the comfort and familiarity of home. We
              take pride in being a trusted partner in your loved one's care
              journey.
            </p>
          </div>
        </div>

        <div>
          <div class="rounded-xl overflow-hidden">
            <div class="flex gap-4 overflow-x-auto p-4">
              <NuxtImg
                v-for="(img, idx) in images"
                :key="idx"
                :src="img"
                class="w-[300px] h-[200px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  "/images/family/1.webp",
  "/images/family/2.webp",
  "/images/family/3.webp",
  "/images/family/4.webp",
  "/images/family/6.webp",
];
</script>
