<template>
  <div class="flex items-center">
    <UAvatar src="/logo.webp" alt="Logo" size="3xl" />
    <span v-if="!iconOnly" class="ml-2 text-xl font-semibold"
      >BlueBird Millcreek</span
    >
  </div>
</template>

<script setup lang="ts">
import { UAvatar } from "#components";

const props = defineProps<{
  iconOnly?: boolean;
}>();
</script>
