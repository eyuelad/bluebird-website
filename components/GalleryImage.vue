<template>
  <div
    class="relative group overflow-hidden rounded-lg shadow-lg"
    @click="$emit('click')"
  >
    <NuxtImg
      :src="url"
      :alt="title || 'gallery'"
      className="w-full h-[300px] object-cover bg-gray-300 duration-300 group-hover:scale-110"
    />
    <div
      class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-white"
    >
      <h3 class="font-bold">{{ title }}</h3>
      <p class="text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string;
  title?: string;
  description?: string;
}>();
</script>
